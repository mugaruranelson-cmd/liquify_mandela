import re
import os
import requests
import time
import random
import json
from PIL import Image
from io import BytesIO
from rembg import remove
from duckduckgo_search import DDGS

JS_PATH = "script.js"
IMG_DIR = "assets/images/real/"
BRAND_MAP_PATH = "brand_origins.json"
os.makedirs(IMG_DIR, exist_ok=True)

# Load Expert Data
with open(BRAND_MAP_PATH, "r") as f:
    EXPERT_MAP = json.load(f)

COUNTRY_EXPERT_LIST = ['Kenya', 'Scotland', 'Ireland', 'France', 'USA', 'Mexico', 'Italy', 'South Africa', 'United Kingdom', 'Germany', 'Spain', 'Japan', 'Sweden', 'Netherlands', 'Moldova', 'Chile', 'Portugal', 'Trinidad and Tobago', 'Nigeria', 'Tanzania', 'India', 'Brazil']

def get_deep_info(name):
    query_img = f"{name} liquor bottle shot transparent"
    info = {'image_url': None, 'country': None}
    try:
        with DDGS() as ddgs:
            img_results = list(ddgs.images(query_img, max_results=2))
            if img_results:
                info['image_url'] = img_results[0].get('image', '')
            
            text_results = list(ddgs.text(f"{name} drink brand country of origin", max_results=2))
            full_text = " ".join([r.get('body', '') + " " + r.get('title', '') for r in text_results]).lower()
            for c in COUNTRY_EXPERT_LIST:
                if c.lower() in full_text:
                    info['country'] = c
                    break
    except Exception as e:
        print(f"  [DDG FAIL] {name}: {e}")
    return info

def process_bottle(img_url, safe_name):
    target_path = os.path.join(IMG_DIR, f"{safe_name}.jpg")
    try:
        print(f"    - Downloading {img_url[:60]}...", end="", flush=True)
        response = requests.get(img_url, timeout=12, headers={'User-Agent': 'Mozilla/5.0'})
        response.raise_for_status()
        input_image = Image.open(BytesIO(response.content)).convert("RGBA")
        print(" Removing BG...", end="", flush=True)
        output_image = remove(input_image)
        canvas = Image.new("RGBA", output_image.size, (11, 11, 11, 255))
        canvas.paste(output_image, (0, 0), output_image)
        w, h = canvas.size
        new_h = 600
        new_w = int((new_h / h) * w)
        canvas = canvas.resize((new_w, new_h), Image.Resampling.LANCZOS)
        if new_w > 500:
            canvas = canvas.crop(((new_w - 500) // 2, 0, (new_w + 500) // 2, 600))
        final = canvas.convert("RGB")
        final.save(target_path, "JPEG", quality=85)
        print(" SAVED.")
        return f"assets/images/real/{safe_name}.jpg"
    except Exception as e:
        print(f" ERROR: {e}")
        return None

def main():
    with open(JS_PATH, "r", encoding="utf-8") as f: js_text = f.read()
    s_marker, e_marker = "/* CATALOGUE_START */", "/* CATALOGUE_END */"
    s_idx, e_idx = js_text.find(s_marker), js_text.find(e_marker)
    if s_idx == -1: return

    items_block = js_text[s_idx + len(s_marker):e_idx]
    item_pattern = re.compile(r'\{\s*name:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*size:\s*"([^"]+)",\s*price:\s*"([^"]+)",\s*description:\s*"([^"]+)",\s*image:\s*"([^"]+)"(?:,\s*isKenyan:\s*(true|false))?(?:,\s*country:\s*"([^"]*)")?\s*\}', re.DOTALL)
    
    items = []
    for m in item_pattern.finditer(items_block):
        items.append({
            'name': m.group(1), 'category': m.group(2), 'size': m.group(3),
            'price': m.group(4), 'description': m.group(5), 'image': m.group(6),
            'isKenyan': m.group(7) == "true", 'country': m.group(8) or "Unknown"
        })

    # Step 1: Expert Lookup (Instant, no rate limit)
    lookup_count = 0
    for it in items:
        n = it['name'].lower()
        if it['country'] == "Unknown":
            for brand, country in EXPERT_MAP.items():
                if brand in n:
                    it['country'] = country
                    if country == "Kenya": it['isKenyan'] = True
                    lookup_count += 1
                    break
    
    print(f"Expert Lookup complete. Instantly resolved {lookup_count} countries.")

    # Step 2: Deep Diver Work (Slow)
    priority_queue = [it for it in items if "assets/images/real" not in it['image'] or it['country'] == "Unknown"]
    
    processed = 0
    max_batch = 50 

    print(f"Deep Diver v3.1 | Batch Target: {max_batch} | Remaining Queue: {len(priority_queue)}")

    for it in priority_queue:
        if processed >= max_batch: break
        
        safe_name = re.sub(r'[^a-zA-Z0-9]', '_', it['name'].lower()).strip('_')
        target_file = os.path.join(IMG_DIR, f"{safe_name}.jpg")
        
        # Decide if we need a deep dive search
        needs_search = False
        if it['country'] == "Unknown": needs_search = True
        if not os.path.exists(target_file): needs_search = True

        if needs_search:
            print(f"[{processed+1}/{max_batch}] DIVE: {it['name']}...", end="", flush=True)
            info = get_deep_info(it['name'])
            
            if it['country'] == "Unknown" and info['country']:
                it['country'] = info['country']
                if info['country'] == "Kenya": it['isKenyan'] = True
                print(f" [COUNTRY: {info['country']}]", end="")

            if not os.path.exists(target_file) and info['image_url']:
                new_path = process_bottle(info['image_url'], safe_name)
                if new_path: it['image'] = new_path
            
            print(" DONE")
            processed += 1
            time.sleep(random.uniform(20, 30)) # Extra slow to avoid 403

    # Rebuild JS
    lines = ["const catalogueProducts = ["]
    for j, it in enumerate(items):
        line = f'    {{\n        name: "{it["name"]}",\n        category: "{it["category"]}",\n        size: "{it["size"]}",\n        price: "{it["price"]}",\n        description: "{it["description"]}",\n        image: "{it["image"]}",\n        isKenyan: {"true" if it["isKenyan"] else "false"},\n        country: "{it["country"]}"\n    }}'
        lines.append(line + ("," if j < len(items)-1 else ""))
    lines.append("];")
    
    new_js = js_text[:s_idx + len(s_marker)] + "\n" + "\n".join(lines) + "\n" + js_text[e_idx:]
    with open(JS_PATH, "w", encoding="utf-8") as f: f.write(new_js)
    
    if processed > 0 or lookup_count > 0:
        os.system('git add . && git commit -m "feat: consolidated deep search - resolved {lookup_count} experts and {processed} searches" && git push origin main')

if __name__ == "__main__":
    main()
