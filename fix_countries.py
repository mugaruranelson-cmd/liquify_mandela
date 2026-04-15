import re
import os
import time
import json
import difflib
from duckduckgo_search import DDGS

JS_PATH = "script.js"

# 1. Expert Mapping (High Accuracy Hand-picked)
EXPERT_MAP = {
    # Kenya (Detailed)
    "kibao": "Kenya", "chrome": "Kenya", "kenya cane": "Kenya", "tusker": "Kenya", "balozi": "Kenya", 
    "white cap": "Kenya", "summit": "Kenya", "viceroy": "Kenya", "hunter's choice": "Kenya", "gilbeys": "Kenya",
    "captain morgan": "Kenya", "beefeater": "United Kingdom", "gordons": "United Kingdom", "smirnoff": "United Kingdom",
    "richot": "Kenya", "bond 7": "Kenya", "konyagi": "Tanzania", "trip": "Kenya", "orijin": "Nigeria",
    "kenyac": "Kenya", "kenyacane": "Kenya", "kane": "Kenya", "whitecap": "Kenya", "baloz": "Kenya",
    "yatta": "Kenya", "orchid": "Kenya", "delmonte": "Kenya", "tropical": "Kenya",
    "clover": "Kenya", "amigos": "Kenya", "best": "Kenya", "meakins": "Kenya", "crystal": "Kenya",
    "legend": "Kenya", "chelsea": "Kenya", "v & a": "Kenya", "kingfisher": "Kenya",
    
    # India (Common in KE market)
    "8pm": "India", "officer's choice": "India", "officers": "India", "mcdowell": "India", "bagpiper": "India",
    "old monk": "India", "royal challenge": "India", "haywards": "India", "8 pm": "India",
    
    # Scotland
    "walker": "Scotland", "chivas": "Scotland", "glenfiddich": "Scotland", "singleton": "Scotland", "macallan": "Scotland",
    "j&b": "Scotland", "black & white": "Scotland", "vat 69": "Scotland", "grants": "Scotland", "ballantines": "Scotland",
    "glenmorangie": "Scotland", "famous grouse": "Scotland", "talisker": "Scotland", "lagavulin": "Scotland",
    
    # Ireland
    "jameson": "Ireland", "bushmills": "Ireland", "tullamore": "Ireland", "powers": "Ireland",
    
    # South Africa
    "4th street": "South Africa", "strt": "South Africa", "cellar cask": "South Africa", "robertson": "South Africa", "overmeer": "South Africa",
    "drostdy hof": "South Africa", "nederburg": "South Africa", "tall horse": "South Africa", "j.c. le roux": "South Africa",
    "amarula": "South Africa", "delush": "South Africa", "viva": "South Africa", "fragolino": "Italy",
    
    # France
    "hennessy": "France", "martell": "France", "remy martin": "France", "ciroc": "France", "grey goose": "France",
    "belaire": "France", "moet": "France", "dom perignon": "France", "veuve clicquot": "France",
    "jp chenet": "France", "barton & guestier": "France", "b&g": "France",
    
    # Brazil
    "leblon": "Brazil", "pitú": "Brazil", "cachaca": "Brazil",
    
    # Others
    "absolut": "Sweden", "bacardi": "Puerto Rico", "campari": "Italy", "jagermeister": "Germany", "jose cuervo": "Mexico",
    "don julio": "Mexico", "casamigos": "Mexico", "coron": "Mexico", "heineken": "Netherlands", "stella": "Belgium",
    "tanqueray": "United Kingdom", "bombay": "United Kingdom", "gordon": "United Kingdom", "beefeater": "United Kingdom",
    "zappa": "Italy", "savanna": "South Africa", "windhoek": "Namibia", "hunters cider": "South Africa"
}

COUNTRY_LIST = [
    'Kenya', 'Scotland', 'Ireland', 'France', 'USA', 'Mexico', 'Italy', 'South Africa', 
    'United Kingdom', 'England', 'Sweden', 'Netherlands', 'Jamaica', 'Japan', 'Chile', 
    'Spain', 'Germany', 'Nigeria', 'Tanzania', 'Uganda', 'Ethiopia', 'Belgium', 'Russia',
    'Canada', 'Australia', 'New Zealand', 'Portugal', 'Brazil', 'Argentina', 'China'
]

REGION_MAP = {
    "western cape": "South Africa", "napa valley": "USA", "bordeaux": "France", "champagne": "France",
    "islay": "Scotland", "speyside": "Scotland", "highland": "Scotland", "lowland": "Scotland",
    "tequila": "Mexico", "kentucky": "USA", "tennessee": "USA", "cognac": "France", "chianti": "Italy"
}

def norm(s):
    return re.sub(r'\s+', ' ', re.sub(r'\d+(?:ML|L|LT|CL|LTR|LITRE|M)', '', str(s), flags=re.IGNORECASE)).strip().lower()

def similarity(a, b):
    return difflib.SequenceMatcher(None, a, b).ratio()

def get_country_from_text(text):
    if not text: return None
    text_lower = text.lower()
    
    # Check Regions first (More specific)
    for reg, country in REGION_MAP.items():
        if reg in text_lower:
            return country
            
    # Check Countries
    for c in COUNTRY_LIST:
        if c.lower() in text_lower:
            return c
    return None

def deep_search_country(name):
    # Skip search for obviously Kenyan brands to save API
    n = norm(name)
    if any(k in n for k in ['kibao', 'chrome', 'kenya cane', 'tusker', 'white cap', 'viceroy']):
        return "Kenya"
        
    try:
        with DDGS() as ddgs:
            query = f"{name} drink brand country of origin distiller"
            results = list(ddgs.text(query, max_results=3))
            full_text = " ".join([r.get('body', '') + " " + r.get('title', '') for r in results])
            found = get_country_from_text(full_text)
            if found: return found
    except Exception as e:
        print(f"  [SEARCH FAIL] {name}: {e}")
    return "Unknown"

def main():
    with open(JS_PATH, "r", encoding="utf-8") as f:
        js_text = f.read()

    # Extract catalogue using the established regex
    s_marker, e_marker = "/* CATALOGUE_START */", "/* CATALOGUE_END */"
    s_idx, e_idx = js_text.find(s_marker), js_text.find(e_marker)
    if s_idx == -1 or e_idx == -1:
        print("Markers not found.")
        return

    catalogue_content = js_text[s_idx + len(s_marker):e_idx]
    
    # Parsing items
    item_pattern = re.compile(r'\{\s*name:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*size:\s*"([^"]+)",\s*price:\s*"([^"]+)",\s*description:\s*"([^"]+)",\s*image:\s*"([^"]+)"(?:,\s*isKenyan:\s*(true|false))?(?:,\s*country:\s*"([^"]*)")?\s*\}', re.DOTALL)
    
    items = []
    updated_count = 0
    unknown_items = []
    
    for m in item_pattern.finditer(catalogue_content):
        item = {
            'full_match': m.group(0),
            'name': m.group(1),
            'category': m.group(2),
            'size': m.group(3),
            'price': m.group(4),
            'description': m.group(5),
            'image': m.group(6),
            'isKenyan': m.group(7) if m.group(7) else "false",
            'country': m.group(8) if m.group(8) else "Unknown"
        }
        items.append(item)
        if item['country'] == "Unknown" or item['country'] == "":
            unknown_items.append(item)

    print(f"Loaded {len(items)} items. Found {len(unknown_items)} 'Unknown' countries.")

    # Sweep 1: Expert Mapping & Description Analysis
    for item in unknown_items:
        n = norm(item['name'])
        
        # 1. Check Expert Map (Partial Match)
        found_expert = False
        # Sort keys by length descending to catch most specific brands first
        sorted_keys = sorted(EXPERT_MAP.keys(), key=len, reverse=True)
        for brand in sorted_keys:
            country = EXPERT_MAP[brand]
            # Match if brand is in name OR name is very similar to brand
            if brand in n or (len(n) > 5 and brand in n.replace(" ", "")) or similarity(brand, n) > 0.8:
                item['country'] = country
                found_expert = True
                updated_count += 1
                break
        
        if not found_expert:
            # 2. Check Description
            found_desc = get_country_from_text(item['description'])
            if found_desc:
                item['country'] = found_desc
                updated_count += 1

    print(f"Sweep 1 (Expert Map & Desc) complete. Updated {updated_count} items.")
    
    remaining_unknowns = [it for it in unknown_items if it['country'] == "Unknown"]
    print(f"Remaining for Sweep 2 (Deep Search): {len(remaining_unknowns)}")

    # Sweep 2: Deep Search (Batched to avoid rate limits)
    # We will only do a smaller sample to show it works, then the rest can be done
    for i, item in enumerate(remaining_unknowns):
        if i >= 100: # Limit deep search to 100 per run to be safe
            print("Reached search limit for this run.")
            break
            
        print(f"[{i+1}/{len(remaining_unknowns)}] Searching origin for {item['name']}...", end="", flush=True)
        found = deep_search_country(item['name'])
        if found != "Unknown":
            item['country'] = found
            updated_count += 1
            print(f" FOUND: {found}")
        else:
            print(" NOT FOUND")
        time.sleep(2) # Breath for DDG

    # Re-build catalogue string
    lines = ["const catalogueProducts = ["]
    for j, it in enumerate(items):
        is_kenyan = "true" if it['country'] == "Kenya" else it['isKenyan']
        line = f'    {{\n        name: "{it["name"]}",\n        category: "{it["category"]}",\n        size: "{it["size"]}",\n        price: "{it["price"]}",\n        description: "{it["description"]}",\n        image: "{it["image"]}",\n        isKenyan: {is_kenyan},\n        country: "{it["country"]}"\n    }}'
        lines.append(line + ("," if j < len(items)-1 else ""))
    lines.append("];")
    
    new_catalogue_str = "\n".join(lines)
    new_js = js_text[:s_idx + len(s_marker)] + "\n" + new_catalogue_str + "\n" + js_text[e_idx:]
    
    with open(JS_PATH + ".tmp", "w", encoding="utf-8") as f:
        f.write(new_js)
    os.replace(JS_PATH + ".tmp", JS_PATH)
    
    print(f"\nSUCCESS: Updated script.js. Total items corrected: {updated_count}")

if __name__ == "__main__":
    main()
