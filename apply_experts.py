import re
import json

JS_PATH = "script.js"
MAP_PATH = "brand_origins.json"

with open(MAP_PATH, "r") as f:
    EXPERT_MAP = json.load(f)

with open(JS_PATH, "r", encoding="utf-8") as f:
    js_text = f.read()

s_marker, e_marker = "/* CATALOGUE_START */", "/* CATALOGUE_END */"
s_idx, e_idx = js_text.find(s_marker), js_text.find(e_marker)

if s_idx != -1 and e_idx != -1:
    content = js_text[s_idx+len(s_marker):e_idx]
    
    # Simple replace logic
    new_content = content
    updated = 0
    
    # We loop through all brands in expert map
    for brand, country in EXPERT_MAP.items():
        # Match name: "Brand Name...", category: "...", ... country: "Unknown"
        # We look for the pattern of an item the includes the brand name and currently has "Unknown"
        pattern = re.compile(r'(\{s*name:\s*"[^"]*'+re.escape(brand)+r'[^"]*",[^}]*country:\s*)("Unknown")', re.IGNORECASE)
        new_content, count = pattern.subn(r'\1"'+country+'"', new_content)
        updated += count

    print(f"Updated {updated} items based on expert map.")
    
    # Also update isKenyan if country is Kenya
    new_content, count = re.subn(r'(country:\s*"Kenya")', r'isKenyan: true, \1', new_content)
    
    new_js = js_text[:s_idx+len(s_marker)] + new_content + js_text[e_idx:]
    with open(JS_PATH, "w", encoding="utf-8") as f:
        f.write(new_js)
