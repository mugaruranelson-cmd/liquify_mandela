import re
import os
import requests
from io import BytesIO
from PIL import Image
from rembg import remove

JS_PATH = "script.js"
IMG_DIR = "assets/images/real/"

# Targeted fixes for high-impact Kenyan bottles
FIXES = {
    "58 Spiced Orange": "https://kenyaoriginals.com/wp-content/uploads/2021/04/58-G-T-Orange-Bottle-Shot.png",
    "58 Very Berry G&T Can": "https://kenyaoriginals.com/wp-content/uploads/2021/04/58-G-T-Berry-Can-Shot.png",
    "Aspera Gin": "https://static.wixstatic.com/media/0d7f3e_4f4b6d4d4b4d4b4d4b4d4b4d4b4d4b4d~mv2.png/v1/fill/w_400,h_600/Aspera_Gin_Bottle.png",
    "Allsops Beer": "https://www.eabl.com/sites/default/files/styles/product_image_large/public/2021-02/Allsopps%20Lager.png"
}

def process_img(name, url):
    safe_name = re.sub(r'[^a-zA-Z0-9]', '_', name.lower()).strip('_')
    target_path = os.path.join(IMG_DIR, f"{safe_name}.jpg")
    try:
        resp = requests.get(url, timeout=15)
        resp.raise_for_status()
        img = Image.open(BytesIO(resp.content)).convert("RGBA")
        out = remove(img)
        canvas = Image.new("RGBA", out.size, (11, 11, 11, 255))
        canvas.paste(out, (0, 0), out)
        canvas.thumbnail((400, 600), Image.Resampling.LANCZOS)
        final = canvas.convert("RGB")
        final.save(target_path, "JPEG", quality=85)
        return f"assets/images/real/{safe_name}.jpg"
    except Exception as e:
        print(f"Error processing {name}: {e}")
        return None

with open(JS_PATH, "r", encoding="utf-8") as f:
    js_text = f.read()

updated_count = 0
for name, url in FIXES.items():
    print(f"Processing Perfect Image for {name}...")
    new_path = process_img(name, url)
    if new_path:
        # Update isKenyan and Country and Image in the file
        # We find the item by name and update its properties
        pattern = re.compile(r'(\{s*name:\s*"' + re.escape(name) + r'"[^}]+image:\s*"[^"]*")[^}]*\}', re.DOTALL)
        # Fix: replace image, isKenyan, country
        js_text = pattern.sub(lambda m: m.group(1).replace('image: "', f'image: "{new_path}"') + ',\n        isKenyan: true,\n        country: "Kenya"\n    }', js_text)
        updated_count += 1

with open(JS_PATH, "w", encoding="utf-8") as f:
    f.write(js_text)

print(f"Manually perfected {updated_count} items.")
