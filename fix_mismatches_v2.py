import os
import re

def slugify(v): 
    return re.sub(r'[^a-z0-9]+', '_', v.lower()).strip('_')

def run_reconciliation():
    assets_dir = "assets/images/real"
    actual_files = os.listdir(assets_dir)
    # Map slugs to actual filenames
    file_map = {slugify(f.split('.')[0]): f for f in actual_files if '.' in f}
    
    # Common brand keywords to file match (Strict)
    BRAND_KEYWORDS = {
        "johnnie": "johnnie_walker",
        "jack": "jack_daniel",
        "tusker": "tusker",
        "guinness": "guinness",
        "smirnoff": "smirnoff",
        "absolut": "absolut",
        "4th": "4th",
        "viceroy": "viceroy",
        "jameson": "jameson",
        "martell": "martell",
        "hennessy": "hennessy",
        "belaire": "belaire",
        "flirt": "flirt",
        "delmonte": "delmonte",
        "captain": "captain",
        "bacardi": "bacardi",
        "beefeater": "beefeater",
        "bombay": "bombay",
        "safari": "safari",
        "nederburg": "nederburg",
        "robertson": "robertson",
        "gordon": "gordon",
        "tanqueray": "tanqueray",
        "ko": "ko",
        "penasol": "penasol",
        "asconi": "asconi",
        "kwv": "kwv",
    }

    with open('products.js', 'r') as f:
        content = f.read()

    lines = content.split('\n')
    new_lines = []
    
    current_name = None
    fixes = 0
    local_matched = 0
    placeholder_used = 0

    for line in lines:
        name_match = re.search(r'name:\s*"([^"]+)"', line)
        if name_match:
            current_name = name_match.group(1)
        
        image_match = re.search(r'image:\s*"([^"]+)"', line)
        if image_match and current_name:
            current_image = image_match.group(1)
            name_lower = current_name.lower()
            name_slug = slugify(current_name)
            
            new_image = None
            
            # STEP 1: STRICT BRAND MATCHING
            # Does the product name contain a brand we actually have an image for?
            matched_brand = None
            for kw, file_prefix in BRAND_KEYWORDS.items():
                if kw in name_lower:
                    # Look for a file that actually starts with this prefix
                    for slug, fname in file_map.items():
                        if slug.startswith(file_prefix) or file_prefix in slug:
                            # Prioritize more specific slugs
                            if slug == name_slug or name_slug in slug:
                                new_image = f"assets/images/real/{fname}"
                                local_matched += 1
                                break
                    if new_image: break
            
            # STEP 2: IF NO BRAND MATCH, USE PROFESSIONAL CATEGORY PLACEHOLDER
            if not new_image:
                category = "Bottle"
                if "whisky" in name_lower or "whiskey" in name_lower: category = "Premium+Whisky"
                elif "wine" in name_lower: category = "Fine+Wine"
                elif "beer" in name_lower: category = "Chilled+Beer"
                elif "vodka" in name_lower: category = "Smooth+Vodka"
                elif "gin" in name_lower: category = "Classic+Gin"
                elif "cognac" in name_lower: category = "Luxury+Cognac"
                elif "liqueur" in name_lower: category = "Fine+Liqueur"
                
                # Dark gold theme placeholder to match Liquify aesthetics
                new_image = f"https://placehold.co/400x600/1a1a1b/d4af37?text={category}"
                placeholder_used += 1

            # APPLY CHANGE
            if new_image and new_image != current_image:
                line = line.replace(current_image, new_image)
                fixes += 1
        
        new_lines.append(line)

    with open('products.js', 'w') as f:
        f.write('\n'.join(new_lines))

    print(f"Reconciliation Complete:")
    print(f"  Fixed/Corrected items: {fixes}")
    print(f"  Strict Local Brand Matches: {local_matched}")
    print(f"  Professional Placeholders Used: {placeholder_used}")

if __name__ == "__main__":
    run_reconciliation()
