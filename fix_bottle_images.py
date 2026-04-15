import re
import os
import requests
import time
import random
from PIL import Image
from io import BytesIO
from rembg import remove
from duckduckgo_search import DDGS
import json

JS_PATH = "script.js"
IMG_DIR = "assets/images/real/"

os.makedirs(IMG_DIR, exist_ok=True)

def norm_name(s):
    return re.sub(r'[^a-zA-Z0-9]', '_', s.lower()).strip('_')

def get_image_url(name):
    # Rotate queries to avoid footprints
    queries = [
        f"{name} bottle shot high resolution",
        f"{name} liquor product photography",
        f"{name} transparent png bottle"
    ]
    query = random.choice(queries)
    try:
        with DDGS() as ddgs:
            results = list(ddgs.images(query, max_results=3))
            if results:
                # Return the result with the largest body snippet or just the first robust one
                return results[1].get('image', '') if len(results) > 1 else results[0].get('image', '')
    except Exception as e:
        print(f"  [DDG FAIL] {name}: {e}")
    return None

def process_bottle_image(img_url, safe_name):
    target_path = os.path.join(IMG_DIR, f"{safe_name}.jpg")
    rel_path = f"assets/images/real/{safe_name}.jpg"
    
    if not img_url: return None

    try:
        response = requests.get(img_url, timeout=12, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'})
        response.raise_for_status()
        
        # Remove background using rembg
        input_image = Image.open(BytesIO(response.content)).convert("RGBA")
        output_image = remove(input_image)
        
        # Site theme black: #0B0B0B (11, 11, 11)
        canvas = Image.new("RGBA", output_image.size, (11, 11, 11, 255))
        canvas.paste(output_image, (0, 0), output_image)
        
        # Resize to premium standard
        w, h = canvas.size
        new_h = 600
        new_w = int((new_h / h) * w)
        canvas = canvas.resize((new_w, new_h), Image.Resampling.LANCZOS)
        
        if new_w > 500:
            canvas = canvas.crop(((new_w - 500) // 2, 0, (new_w + 500) // 2, 600))

        final = canvas.convert("RGB")
        final.save(target_path, "JPEG", quality=85)
        return rel_path
    except Exception as e:
        print(f"  [PROCESS FAIL] {safe_name}: {e}")
        return None

def main():
    with open(JS_PATH, "r", encoding="utf-8") as f:
        js_text = f.read()

    s_marker, e_marker = "/* CATALOGUE_START */", "/* CATALOGUE_END */"
    s_idx, e_idx = js_text.find(s_marker), js_text.find(e_marker)
    if s_idx == -1 or e_idx == -1: return

    # Simple item parser
    items_block = js_text[s_idx + len(s_marker):e_idx]
    item_pattern = re.compile(r'\{\s*name:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*size:\s*"([^"]+)",\s*price:\s*"([^"]+)",\s*description:\s*"([^"]+)",\s*image:\s*"([^"]+)"(?:,\s*isKenyan:\s*(true|false))?(?:,\s*country:\s*"([^"]*)")?\s*\}', re.DOTALL)
    
    items = []
    for m in item_pattern.finditer(items_block):
        items.append({
            'name': m.group(1), 'category': m.group(2), 'size': m.group(3),
            'price': m.group(4), 'description': m.group(5), 'image': m.group(6),
            'isKenyan': m.group(7) == "true", 'country': m.group(8) or "Unknown"
        })

    # Prioritize missing images + Kenyan pride
    kenyan = [it for it in items if it['isKenyan']]
    others = [it for it in items if not it['isKenyan']]
    full_queue = kenyan + others

    processed = 0
    max_batch = 50

    print(f"Starting High-Precision Image Dive. Mode: Everything. Target: {max_batch}")

    for it in full_queue:
        if processed >= max_batch: break
        
        # We process if the image is a generic failure path or missing
        safe_name = norm_name(it['name'])
        target_file = os.path.join(IMG_DIR, f"{safe_name}.jpg")
        
        # We only re-process if the item looks like it has a weak/missing image
        # OR if it is a Kenyan item we want to "Perfect"
        needs_work = False
        if not os.path.exists(target_file): needs_work = True
        elif os.path.getsize(target_file) < 8000: needs_work = True # Very small usually means a fail
        elif it['isKenyan'] and "assets/images/real" not in it['image']: needs_work = True

        if needs_work:
            print(f"[{processed+1}/{max_batch}] DIVE: {it['name']}...", end="", flush=True)
            url = get_image_url(it['name'])
            if url:
                new_path = process_bottle_image(url, safe_name)
                if new_path:
                    it['image'] = new_path
                    processed += 1
                    print(" SUCCESS")
                else:
                    print(" IMAGE PROCESSING FAIL")
            else:
                print(" NO IMAGE FOUND")
            # LONGER SLEEP to avoid ratelimit
            time.sleep(random.uniform(5, 10))

    # Save
    lines = ["const catalogueProducts = ["]
    for j, it in enumerate(items):
        line = f'    {{\n        name: "{it["name"]}",\n        category: "{it["category"]}",\n        size: "{it["size"]}",\n        price: "{it["price"]}",\n        description: "{it["description"]}",\n        image: "{it["image"]}",\n        isKenyan: {"true" if it["isKenyan"] else "false"},\n        country: "{it["country"]}"\n    }}'
        lines.append(line + ("," if j < len(items)-1 else ""))
    lines.append("];")
    new_js = js_text[:s_idx + len(s_marker)] + "\n" + "\n".join(lines) + "\n" + js_text[e_idx:]
    with open(JS_PATH, "w", encoding="utf-8") as f: f.write(new_js)
    
    # Auto-push results
    if processed > 0:
        os.system('git add assets/images/real/ script.js')
        os.system(f'git commit -m "feat: deep image dive - perfected {processed} bottles"')
        os.system('git push origin main')

if __name__ == "__main__":
    main()
