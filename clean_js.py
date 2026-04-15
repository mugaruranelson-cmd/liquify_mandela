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

if s_idx == -1:
    print("Markers not found.")
    exit()

content = js_text[s_idx+len(s_marker):e_idx]

# Pattern to extract individual items
item_regex = re.compile(r'\{([^{}]+)\}', re.DOTALL)
items = []

def parse_item(item_str):
    # Extract existing fields using a simpler method
    lines = item_str.split('\n')
    fields = {}
    for line in lines:
        line = line.strip().rstrip(',')
        if ':' in line:
            # Only split on the first colon
            parts = line.split(':', 1)
            key = parts[0].strip()
            val = parts[1].strip().strip('"').strip("'")
            if val == 'true': val = True
            elif val == 'false': val = False
            fields[key] = val
    return fields

matches = item_regex.findall(content)
for match in matches:
    item = parse_item(match)
    if 'name' not in item: continue
    
    # Apply Brand Origins if Unknown
    name_lower = item['name'].lower()
    if item.get('country') == "Unknown" or not item.get('country'):
        for brand, country in EXPERT_MAP.items():
            if brand in name_lower:
                item['country'] = country
                break
    
    # Ensure isKenyan flag is consistent
    if item.get('country') == 'Kenya':
        item['isKenyan'] = True
    elif not item.get('isKenyan'):
        item['isKenyan'] = False
    
    items.append(item)

# Rebuild the string
lines = ["const catalogueProducts = ["]
for i, item in enumerate(items):
    # Escaping double quotes in description
    desc = item.get("description", "").replace('"', '\\"')
    
    line = "    {\n"
    line += f'        name: "{item.get("name", "")}",\n'
    line += f'        category: "{item.get("category", "")}",\n'
    line += f'        size: "{item.get("size", "")}",\n'
    line += f'        price: "{item.get("price", "")}",\n'
    line += f'        description: "{desc}",\n'
    line += f'        image: "{item.get("image", "")}",\n'
    line += f'        isKenyan: {"true" if item.get("isKenyan") else "false"},\n'
    line += f'        country: "{item.get("country", "Unknown")}"\n'
    line += "    }"
    if i < len(items) - 1: line += ","
    lines.append(line)
lines.append("];")

new_catalogue = "\n".join(lines)
new_js = js_text[:s_idx+len(s_marker)] + "\n" + new_catalogue + "\n" + js_text[e_idx:]

with open(JS_PATH, "w", encoding="utf-8") as f:
    f.write(new_js)

print(f"Cleaned and updated {len(items)} items.")
