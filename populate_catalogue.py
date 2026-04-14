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

# Configuration
CSV_PATH = "assets/LIQUIFY Selling Price.csv"
JS_PATH = "script.js"
IMG_DIR = "assets/images/real"
MIGRATION_MODE = True # Set to False after upgrading all existing items

SERPAPI_KEY = "fca4b8bc7aac334b53fb5536fa8e0dd2d925800aae2b0c519a890bb5910989ae"
SERPAPI_MIN_INTERVAL = 20.0
_last_serpapi_call = 0.0
_serpapi_call_count = 0
_serpapi_hour_start = time.time()
_serpapi_throttled_until = 0.0

os.makedirs(IMG_DIR, exist_ok=True)

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
    match = re.search(r'(\d+(?:\.\d+)?\s*(?:ML|L|LT|CL|LTR|LITRE))', name, re.IGNORECASE)
    return match.group(1).upper() if match else "750ML"

def format_price(raw_price):
    try:
        p = float(re.sub(r'[^\d.]', '', raw_price))
        return f"Ksh {int(p):,}"
    except:
        return f"Ksh {raw_price}"

def fetch_image_serpapi(query):
    global _last_serpapi_call, _serpapi_call_count, _serpapi_hour_start, _serpapi_throttled_until
    if time.time() < _serpapi_throttled_until: return ""
    elapsed = time.time() - _last_serpapi_call
    if elapsed < SERPAPI_MIN_INTERVAL: time.sleep(SERPAPI_MIN_INTERVAL - elapsed)
    if time.time() - _serpapi_hour_start > 3600:
        _serpapi_hour_start = time.time()
        _serpapi_call_count = 0
    try:
        from serpapi import GoogleSearch
        search = GoogleSearch({"engine": "google_images", "q": query + " bottle transparent background", "api_key": SERPAPI_KEY, "num": 1})
        results = search.get_dict()
        _last_serpapi_call = time.time()
        _serpapi_call_count += 1
        if 'images_results' in results: return results['images_results'][0].get('original', '')
    except: pass
    return ""

def fetch_info_serpapi(name):
    """Fetches country and detailed description."""
    global _last_serpapi_call, _serpapi_call_count, _serpapi_throttled_until
    if time.time() < _serpapi_throttled_until: return "Unknown", "A quality drink offering exceptional taste."
    
    elapsed = time.time() - _last_serpapi_call
    if elapsed < 5.0: time.sleep(5.0 - elapsed) # Faster for text than images
    
    try:
        from serpapi import GoogleSearch
        search = GoogleSearch({
            "engine": "google",
            "q": f"{name} drink spirits wine country of origin and product description summary",
            "api_key": SERPAPI_KEY
        })
        res = search.get_dict()
        _last_serpapi_call = time.time()
        _serpapi_call_count += 1

        desc = res.get('answer_box', {}).get('answer', '') or res.get('answer_box', {}).get('snippet', '')
        if not desc:
            kg = res.get('knowledge_graph', {})
            desc = kg.get('description', '')
        
        # Heuristic for country
        country = "Unknown"
        countries = ['Kenya', 'Scotland', 'Ireland', 'France', 'USA', 'Mexico', 'Italy', 'South Africa', 'United Kingdom', 'England', 'Sweden', 'Netherlands', 'Jamaica', 'Japan', 'Chile', 'Spain', 'Germany']
        full_text = (res.get('answer_box', {}).get('snippet', '') + " " + res.get('knowledge_graph', {}).get('description', '') + " " + (res.get('organic_results', [{}])[0].get('snippet', '') if res.get('organic_results') else '')).lower()
        
        for c in countries:
            if c.lower() in full_text:
                country = c
                break
        
        if not desc:
            desc = res.get('organic_results', [{}])[0].get('snippet', 'A quality drink offering exceptional taste.') if res.get('organic_results') else 'A quality drink offering exceptional taste.'

        return country, desc[:250].replace('"', "'")
    except Exception as e:
        print(f"  [SERPAPI INFO FAIL] {e}")
        return "Unknown", "A quality drink offering exceptional taste."

def fetch_image_ddg(query):
    try:
        with DDGS() as ddgs:
            res = list(ddgs.images(query + " bottle", max_results=1))
            if res: return res[0]['image']
    except: pass
    return ""

def process_image(img_url, safe_name):
    target_path = os.path.join(IMG_DIR, f"{safe_name}.jpg")
    rel_path = f"assets/images/real/{safe_name}.jpg"
    if os.path.exists(target_path): return rel_path
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

def git_push(count):
    print(f"  [GIT] Pushing {count} updates...")
    os.system('git add script.js assets/images/real/')
    os.system(f'git commit -m "feat: enhance catalogue - added country/descriptions {count}"')
    os.system('git push origin main')

def main():
    def save_js(current_catalogue):
        lines = ["const catalogueProducts = ["]
        for j, it in enumerate(current_catalogue):
            kenyan_str = f",\n        isKenyan: {it['isKenyan']}" if 'isKenyan' in it else ""
            country_str = f',\n        country: "{it["country"]}"' if 'country' in it else ',\n        country: "Unknown"'
            lines.append(f'    {{\n        name: "{it["name"]}",\n        category: "{it["category"]}",\n        size: "{it["size"]}",\n        price: "{it["price"]}",\n        description: "{it["description"]}",\n        image: "{it["image"]}"{kenyan_str}{country_str}\n    }}' + ("," if j < len(current_catalogue)-1 else ""))
        lines.append("];")
        new_block = "\n".join(lines)
        
        with open(JS_PATH, "r", encoding="utf-8") as f:
            js_text = f.read()
            
        s_marker, e_marker = "/* CATALOGUE_START */", "/* CATALOGUE_END */"
        s_idx, e_idx = js_text.find(s_marker), js_text.find(e_marker)
        
        if s_idx != -1 and e_idx != -1:
            new_js = js_text[:s_idx + len(s_marker)] + "\n" + new_block + "\n" + js_text[e_idx:]
            # Atomic swap
            tmp_path = JS_PATH + ".tmp"
            with open(tmp_path, "w", encoding="utf-8") as f:
                f.write(new_js)
            os.replace(tmp_path, JS_PATH)
            print(f"  [SAVE] script.js updated ({len(current_catalogue)} items).", flush=True)

    with open(JS_PATH, "r", encoding="utf-8") as f: js_content = f.read()
    s_marker, e_marker = "/* CATALOGUE_START */", "/* CATALOGUE_END */"
    catalogue = []
    s_idx, e_idx = js_content.find(s_marker), js_content.find(e_marker)
    if s_idx != -1 and e_idx != -1:
        existing_str = js_content[s_idx+len(s_marker):e_idx]
        item_pattern = re.compile(r'\{\s*name:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*size:\s*"([^"]+)",\s*price:\s*"([^"]+)",\s*description:\s*"([^"]+)",\s*image:\s*"([^"]+)"(?:,\s*isKenyan:\s*(true|false))?(?:,\s*country:\s*"([^"]*)")?\s*\}', re.DOTALL)
        for m in item_pattern.finditer(existing_str):
            item = {'name': m.group(1), 'category': m.group(2), 'size': m.group(3), 'price': m.group(4), 'description': m.group(5), 'image': m.group(6)}
            if m.group(7): item['isKenyan'] = m.group(7)
            item['country'] = m.group(8) if m.group(8) else "Unknown"
            catalogue.append(item)
    
    print(f"Loaded {len(catalogue)} items.", flush=True)

    if MIGRATION_MODE:
        print("MIGRATION MODE: Updating existing items with country and rich descriptions...", flush=True)
        for idx, item in enumerate(catalogue):
            if item.get('country') == "Unknown" or "quality drink offering" in item.get('description', ''):
                print(f"  [MIGRATE] {item['name']}...", end="", flush=True)
                country, desc = fetch_info_serpapi(item['name'])
                item['country'] = country
                item['description'] = desc
                print(f" OK ({country})", flush=True)
                if (idx + 1) % 5 == 0: save_js(catalogue)
        save_js(catalogue)
        git_push("migration-batch")

    with open(CSV_PATH, "r", encoding="utf-8", errors='ignore') as f:
        rows = list(csv.reader(f))
    
    total = len(rows) - 1
    added, last_push_count = 0, 0
    seen = set()
    def norm(s): return re.sub(r'\s+', ' ', re.sub(r'\d+(?:ML|L|LT|CL|LTR|LITRE)', '', s, flags=re.IGNORECASE)).strip().lower()

    for i, row in enumerate(rows):
        if i == 0 or len(row) < 2: continue
        raw_name = row[0].strip().lstrip('\ufeff')
        if not raw_name: continue
        size = get_size_from_name(raw_name)
        clean_name = re.sub(r'\s*\d+(?:\.\d+)?\s*(?:ML|L|LT|CL|LTR|LITRE)', '', raw_name, flags=re.IGNORECASE).strip()
        
        sn = norm(clean_name)
        found = any(similarity(sn, norm(c['name'])) >= 0.85 and c['size'] == size for c in catalogue)
        if found: continue

        dedup_key = sn + "|" + size
        if dedup_key in seen: continue
        seen.add(dedup_key)
        if any(k in clean_name.lower() for k in ['empty bottle', 'empty crate', 'crate', 'cigarette', 'incentive']): continue

        added += 1
        print(f"[{i}/{total}] [NEW] {clean_name}...", flush=True)
        country, desc = fetch_info_serpapi(clean_name)
        img_url = fetch_image_serpapi(clean_name) or fetch_image_ddg(clean_name)
        safe_name = re.sub(r'[^a-zA-Z0-9]', '_', clean_name.lower()).strip('_')[:60]
        final_img = f"https://placehold.co/400x600/0B0B0B/D4AF37/png?text={urllib.parse.quote(clean_name)}"
        if img_url:
            saved = process_image(img_url, safe_name)
            if saved: final_img = saved
        
        catalogue.append({'name': clean_name.title(), 'category': get_category(clean_name), 'size': size, 'price': format_price(row[1].strip()), 'description': desc, 'image': final_img, 'isKenyan': 'false', 'country': country})
        save_js(catalogue)

        if added % 25 == 0 and added > last_push_count:
            git_push(added)
            last_push_count = added
    
    git_push(added)

if __name__ == "__main__":
    main()
