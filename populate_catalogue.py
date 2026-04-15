import os
import csv
import re
import time
import requests
import urllib.parse
from PIL import Image
from io import BytesIO
from rembg import remove
from duckduckgo_search import DDGS
import difflib
import concurrent.futures

# Configuration
CSV_PATH = "assets/LIQUIFY Selling Price.csv"
JS_PATH = "script.js"
IMG_DIR = "assets/images/real"
MIGRATION_MODE = False # Done with migration, focusing on new items

SERPAPI_KEY = "fca4b8bc7aac334b53fb5536fa8e0dd2d925800aae2b0c519a890bb5910989ae"
# 195 searches/hour = 1 search every 18.5 seconds
SERPAPI_MIN_INTERVAL = 18.5 
_last_serpapi_time = 0.0

os.makedirs(IMG_DIR, exist_ok=True)
_brand_cache = {} # Cache: {brand_name_normalized: (country, description, image_url)}

def norm(s):
    return re.sub(r'\s+', ' ', re.sub(r'\d+(?:ML|L|LT|CL|LTR|LITRE|M)', '', s, flags=re.IGNORECASE)).strip().lower()

def similarity(a, b):
    if not a or not b: return 0
    return difflib.SequenceMatcher(None, a, b).ratio()

def get_category(name):
    name = name.lower()
    if any(x in name for x in ['wine', 'rosso', 'sweet red', 'sweet white', 'chardonnay', 'merlot', 'cabernet', 'shiraz', 'belaire', 'cellar cask', '4th street']): return 'wine'
    if any(x in name for x in ['whisky', 'whiskey', 'walker', 'jameson', 'glenfiddich', 'jack daniel', 'chivas', 'singleton', 'glenmorangie', 'grouse', 'black & white', 'hunter']): return 'whisky'
    if any(x in name for x in ['vodka', 'absolut', 'smirnoff', 'ciroc', 'ketel', 'flirt', 'kibao', 'chrome', 'salute']): return 'vodka'
    if any(x in name for x in ['brandy', 'viceroy', 'martell', 'hennessy']): return 'brandy'
    if any(x in name for x in ['gin', 'tanqueray', 'bombay', 'gordon', 'gilbey', 'beefeater', 'hendrick']): return 'gin'
    if any(x in name for x in ['beer', 'heineken', 'tusker', 'white cap', 'guinness', 'balozi', 'pilsner']): return 'beer'
    if any(x in name for x in ['liqueur', 'cream', 'baileys', 'amarula']): return 'liqueur'
    if any(x in name for x in ['rum', 'captain morgan', 'bacardi', 'caribia']): return 'rum'
    return 'other'

def get_size_from_name(name):
    match = re.search(r'(\d+(?:\.\d+)?\s*(?:ML|L|LT|CL|LTR|LITRE|M))', name, re.IGNORECASE)
    return match.group(1).upper() if match else "750ML"

def rate_limit():
    global _last_serpapi_time
    elapsed = time.time() - _last_serpapi_time
    if elapsed < SERPAPI_MIN_INTERVAL:
        time.sleep(SERPAPI_MIN_INTERVAL - elapsed)
    _last_serpapi_time = time.time()

def fetch_info(name):
    try:
        with DDGS() as ddgs:
            results = list(ddgs.text(f"{name} drink spirits wine country of origin summary", max_results=3))
            full_text = " ".join([r.get('body', '') for r in results]).lower()
            
            # Simple country extraction
            countries = ['Kenya', 'Scotland', 'Ireland', 'France', 'USA', 'Mexico', 'Italy', 'South Africa', 'United Kingdom', 'England', 'Sweden', 'Netherlands', 'Jamaica', 'Japan', 'Chile', 'Spain', 'Germany']
            country = "Unknown"
            for c in countries:
                if c.lower() in full_text:
                    country = c
                    break
            
            desc = results[0].get('body', '')[:250].replace('"', "'") if results else "A quality drink offering exceptional taste."
            return country, desc
    except Exception as e:
        print(f"  [DDG INFO FAIL] {e}")
        return "Unknown", "A quality drink offering exceptional taste."

def fetch_image(name):
    try:
        with DDGS() as ddgs:
            results = list(ddgs.images(f"{name} bottle", max_results=1))
            if results:
                return results[0].get('image', '')
    except Exception as e:
        print(f"  [DDG IMAGE FAIL] {e}")
    return ""

def process_image(img_url, safe_name):
    target_path = os.path.join(IMG_DIR, f"{safe_name}.jpg")
    rel_path = f"assets/images/real/{safe_name}.jpg"
    if os.path.exists(target_path): return rel_path
    if not img_url: return ""
    try:
        response = requests.get(img_url, timeout=10, headers={'User-Agent': 'Mozilla/5.0'})
        response.raise_for_status()
        input_image = Image.open(BytesIO(response.content)).convert("RGBA")
        output_image = remove(input_image)
        black_bg = Image.new("RGBA", output_image.size, (11, 11, 11, 255))
        black_bg.paste(output_image, (0, 0), output_image)
        black_bg.thumbnail((400, 600), Image.Resampling.LANCZOS)
        final_image = black_bg.convert("RGB")
        final_image.save(target_path, "JPEG", quality=85)
        return rel_path
    except:
        return ""

def save_js(current_catalogue):
    lines = ["const catalogueProducts = ["]
    for j, it in enumerate(current_catalogue):
        kenyan_str = f",\n        isKenyan: {it['isKenyan']}" if 'isKenyan' in it else ""
        country_str = f',\n        country: "{it["country"]}"' if 'country' in it else ',\n        country: "Unknown"'
        lines.append(f'    {{\n        name: "{it["name"]}",\n        category: "{it["category"]}",\n        size: "{it["size"]}",\n        price: "{it["price"]}",\n        description: "{it["description"]}",\n        image: "{it["image"]}"{kenyan_str}{country_str}\n    }}' + ("," if j < len(current_catalogue)-1 else ""))
    lines.append("];")
    new_block = "\n".join(lines)
    with open(JS_PATH, "r", encoding="utf-8") as f: js_text = f.read()
    s_marker, e_marker = "/* CATALOGUE_START */", "/* CATALOGUE_END */"
    s_idx, e_idx = js_text.find(s_marker), js_text.find(e_marker)
    if s_idx != -1 and e_idx != -1:
        new_js = js_text[:s_idx + len(s_marker)] + "\n" + new_block + "\n" + js_text[e_idx:]
        tmp_path = JS_PATH + ".tmp"
        with open(tmp_path, "w", encoding="utf-8") as f: f.write(new_js)
        os.replace(tmp_path, JS_PATH)

def git_push(count):
    print(f"  [GIT] Pushing {count} updates...")
    os.system('git add script.js assets/images/real/')
    os.system(f'git commit -m "feat: high-speed update - processed {count}"')
    os.system('git push origin main')

def main():
    # Load existing
    with open(JS_PATH, "r", encoding="utf-8") as f: js_content = f.read()
    catalogue = []
    s_marker, e_marker = "/* CATALOGUE_START */", "/* CATALOGUE_END */"
    s_idx, e_idx = js_content.find(s_marker), js_content.find(e_marker)
    if s_idx != -1 and e_idx != -1:
        existing_str = js_content[s_idx+len(s_marker):e_idx]
        item_pattern = re.compile(r'\{\s*name:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*size:\s*"([^"]+)",\s*price:\s*"([^"]+)",\s*description:\s*"([^"]+)",\s*image:\s*"([^"]+)"(?:,\s*isKenyan:\s*(true|false))?(?:,\s*country:\s*"([^"]*)")?\s*\}', re.DOTALL)
        for m in item_pattern.finditer(existing_str):
            item = {'name': m.group(1), 'category': m.group(2), 'size': m.group(3), 'price': m.group(4), 'description': m.group(5), 'image': m.group(6)}
            if m.group(7): item['isKenyan'] = m.group(7)
            item['country'] = m.group(8) if m.group(8) else "Unknown"
            catalogue.append(item)
            _brand_cache[norm(item['name'])] = (item['country'], item['description'], item['image'])
    
    print(f"Loaded {len(catalogue)} items. Cache primed with {len(_brand_cache)} brands.", flush=True)

    with open(CSV_PATH, "r", encoding="utf-8", errors='ignore') as f:
        rows = list(csv.reader(f))
    
    total = len(rows) - 1
    added, last_push_count = 0, 0
    seen = set()

    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as executor:
        for i, row in enumerate(rows):
            if i == 0 or len(row) < 2: continue
            raw_name = row[0].strip().lstrip('\ufeff')
            if not raw_name: continue
            size = get_size_from_name(raw_name)
            clean_name = re.sub(r'\s*\d+(?:\.\d+)?\s*(?:ML|L|LT|CL|LTR|LITRE|M)', '', raw_name, flags=re.IGNORECASE).strip()
            
            sn = norm(clean_name)
            if any(similarity(sn, norm(c['name'])) >= 0.85 and c['size'] == size for c in catalogue): continue
            dedup_key = sn + "|" + size
            if dedup_key in seen: continue
            seen.add(dedup_key)
            if any(k in clean_name.lower() for k in ['empty bottle', 'empty crate', 'crate', 'cigarette', 'incentive']): continue

            added += 1
            print(f"[{i}/{total}] Processing {clean_name} ({size})...", end="", flush=True)

            # Check Cache
            if sn in _brand_cache:
                country, desc, final_img = _brand_cache[sn]
                print(f" CACHED ({country})", flush=True)
            else:
                # Concurrent Search
                future_info = executor.submit(fetch_info, clean_name)
                future_img = executor.submit(fetch_image, clean_name)
                country, desc = future_info.result()
                img_url = future_img.result()
                
                safe_name = re.sub(r'[^a-zA-Z0-9]', '_', clean_name.lower()).strip('_')[:60]
                final_img = process_image(img_url, safe_name) or f"https://placehold.co/400x600/0B0B0B/D4AF37/png?text={urllib.parse.quote(clean_name)}"
                _brand_cache[sn] = (country, desc, final_img)
                print(f" DONE ({country})", flush=True)

            clean_price = re.sub(r'[^\d.]', '', row[1])
            catalogue.append({'name': clean_name.title(), 'category': get_category(clean_name), 'size': size, 'price': f"Ksh {clean_price}", 'description': desc, 'image': final_img, 'isKenyan': 'false', 'country': country})
            
            if added % 5 == 0: save_js(catalogue)
            if added % 50 == 0: git_push(added)

    save_js(catalogue)
    git_push(added)

if __name__ == "__main__":
    main()
