import os
import re

# WIKIMEDIA COMMONS - STABLE & HEADLESS-FRIENDLY
WIKI_FALLBACKS = {
    "johnnie walker": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Johnnie_Walker_Black_Label.png/200px-Johnnie_Walker_Black_Label.png",
    "jack daniel": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Jack_Daniels_07.jpg/200px-Jack_Daniels_07.jpg",
    "tusker": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Tusker_beer.jpg/200px-Tusker_beer.jpg",
    "heineken": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Heineken_bottle.jpg/200px-Heineken_bottle.jpg",
    "guinness": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Guinness-Bottle.jpg/200px-Guinness-Bottle.jpg",
    "smirnoff": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Smirnoff-Vodka-Bottle.jpg/200px-Smirnoff-Vodka-Bottle.jpg",
    "absolut": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Absolut_Vodka_bottle.jpg/150px-Absolut_Vodka_bottle.jpg",
    "bacardi": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Bacardi_rum.jpg/200px-Bacardi_rum.jpg",
    "captain morgan": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Captain_Morgan.jpg/200px-Captain_Morgan.jpg",
    "hennessy": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Hennessy_VS.jpg/200px-Hennessy_VS.jpg",
    "martell": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Martell_Cognac.jpg/200px-Martell_Cognac.jpg",
    "tanqueray": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tanqueray-Gin.jpg/200px-Tanqueray-Gin.jpg",
    "gordon": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Gordon%27s_Gin_Bottle.jpg/200px-Gordon%27s_Gin_Bottle.jpg",
    "beefeater": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Beefeater_gin.jpg/200px-Beefeater_gin.jpg",
    "jose cuervo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Jose_Cuervo_Especial_Reposado.jpg/200px-Jose_Cuervo_Especial_Reposado.jpg",
    "jameson": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Jameson_Irish_whiskey_-_bottle.jpg/200px-Jameson_Irish_whiskey_-_bottle.jpg",
    "chivas": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Chivas_Regal.jpg/200px-Chivas_Regal.jpg",
    "ballantine": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Ballantine%27s_Finest_Whisky.jpg/200px-Ballantine%27s_Finest_Whisky.jpg",
    "grant": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Grant%27s_Scotch_Whisky.jpg/200px-Grant%27s_Scotch_Whisky.jpg",
    "glenfiddich": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Glenfiddich_12_years.jpg/200px-Glenfiddich_12_years.jpg",
}

# Generic Category Placeholders (Wikimedia)
GENERIC_WIKI = {
    "whisky": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Whiskey_Bottle.jpg/200px-Whiskey_Bottle.jpg",
    "wine": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wine_bottle_and_glass.jpg/200px-Wine_bottle_and_glass.jpg",
    "beer": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Beer_bottle_and_glass.jpg/200px-Beer_bottle_and_glass.jpg",
    "vodka": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Vodka_bottle.jpg/200px-Vodka_bottle.jpg",
    "gin": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Bottle_of_gin.jpg/200px-Bottle_of_gin.jpg",
    "cognac": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Cognac_bottle.jpg/200px-Cognac_bottle.jpg",
    "liqueur": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Liquor_bottles.jpg/200px-Liquor_bottles.jpg",
    "default": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Liquor_bottles.jpg/200px-Liquor_bottles.jpg"
}

def slugify(v): return re.sub(r'[^a-z0-9]+', '_', v.lower()).strip('_')

def run_fix():
    assets_dir = "assets/images/real"
    actual_files = os.listdir(assets_dir)
    file_map = {slugify(f.split('.')[0]): f for f in actual_files if '.' in f}

    with open('products.js', 'r') as f:
        content = f.read()

    # Match product name and image lines specifically
    # Using a more robust line-by-line replacement to avoid regex group issues
    lines = content.split('\n')
    new_lines = []
    
    current_name = None
    fixes = 0
    local_found = 0
    wiki_found = 0
    generic_found = 0

    for line in lines:
        # Detect product name
        name_match = re.search(r'name:\s*"([^"]+)"', line)
        if name_match:
            current_name = name_match.group(1)
        
        # Detect image line
        image_match = re.search(r'image:\s*"([^"]+)"', line)
        if image_match and current_name:
            current_image = image_match.group(1)
            new_image = None
            
            # 1. Attempt Local Match (Priority)
            name_slug = slugify(current_name)
            
            # Check for exact slug or extension variants
            if name_slug in file_map:
                new_image = f"assets/images/real/{file_map[name_slug]}"
                local_found += 1
            else:
                # Try fuzzy brand matching locally
                for slug, fname in file_map.items():
                    if slug in name_slug or name_slug in slug:
                        new_image = f"assets/images/real/{fname}"
                        local_found += 1
                        break
            
            # 2. If not local, try Wikimedia Brand Fallback
            if not new_image:
                name_lower = current_name.lower()
                for brand, url in WIKI_FALLBACKS.items():
                    if brand in name_lower:
                        new_image = url
                        wiki_found += 1
                        break
            
            # 3. Last Resort: Generic Wikimedia Category Placeholder
            if not new_image:
                name_lower = current_name.lower()
                category = "default"
                if "whisky" in name_lower or "whiskey" in name_lower: category = "whisky"
                elif "wine" in name_lower or "red" in name_lower or "white" in name_lower: category = "wine"
                elif "beer" in name_lower or "tusker" in name_lower: category = "beer"
                elif "vodka" in name_lower: category = "vodka"
                elif "gin" in name_lower: category = "gin"
                elif "cognac" in name_lower or "hennessy" in name_lower: category = "cognac"
                elif "liqueur" in name_lower: category = "liqueur"
                
                new_image = GENERIC_WIKI.get(category, GENERIC_WIKI["default"])
                generic_found += 1
            
            # Apply fix
            if new_image and new_image != current_image:
                line = line.replace(current_image, new_image)
                fixes += 1
        
        new_lines.append(line)

    with open('products.js', 'w') as f:
        f.write('\n'.join(new_lines))

    print(f"Repair Complete:")
    print(f"  Total Image Fixes: {fixes}")
    print(f"  Matched Locally: {local_found}")
    print(f"  Matched Wiki Brands: {wiki_found}")
    print(f"  Matched Wiki Generics: {generic_found}")

if __name__ == "__main__":
    run_fix()
