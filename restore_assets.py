import os
import re

def slugify(v): 
    return re.sub(r'[^a-z0-9]+', '_', v.lower()).strip('_')

def get_tokens(text):
    return set(re.findall(r'[a-z0-9]+', text.lower()))

def calculate_score(product_name, product_category, filename):
    name_tokens = get_tokens(product_name)
    file_tokens = get_tokens(filename.split('.')[0])
    
    # 1. Base Intersection
    intersection = name_tokens.intersection(file_tokens)
    score = len(intersection) * 20
    
    # 2. Category Match bonus
    cat_keywords = {
        "whisky": ["whisky", "whiskey", "scotch", "malt"],
        "wine": ["wine", "red", "white", "rose", "cab", "merlot"],
        "gin": ["gin"],
        "beer": ["beer", "lager", "ale", "can", "cider"],
        "vodka": ["vodka"],
        "rum": ["rum"],
        "tequila": ["tequila"],
        "cognac": ["cognac", "brandy", "vs", "vsop", "xo"],
        "liqueur": ["liqueur", "cream", "amarula", "baileys"]
    }
    
    pc = product_category.lower()
    if pc in cat_keywords:
        for kw in cat_keywords[pc]:
            if kw in file_tokens:
                score += 15
                break
                
    # 3. Exact Brand Bonus
    # If the first word of the product name is in the filename
    brands = list(name_tokens)
    if brands and brands[0] in file_tokens:
        score += 30
        
    return score

def run_restoration():
    assets_dir = "assets/images/real"
    actual_files = os.listdir(assets_dir)
    # Filter for image files
    actual_files = [f for f in actual_files if f.lower().endswith(('.jpg', '.png', '.jpeg', '.webp'))]
    
    with open('products.js', 'r') as f:
        content = f.read()

    lines = content.split('\n')
    new_lines = []
    
    current_name = None
    current_category = None
    fixes = 0
    matches_found = []

    for line in lines:
        nm = re.search(r'name:\s*"([^"]+)"', line)
        if nm: current_name = nm.group(1)
        
        cat = re.search(r'category:\s*"([^"]+)"', line)
        if cat: current_category = cat.group(1)
        
        image_match = re.search(r'image:\s*"([^"]+)"', line)
        if image_match and current_name and current_category:
            current_image = image_match.group(1)
            
            # Find the best match among ALL 562 files
            best_file = None
            best_score = 0
            
            for f in actual_files:
                score = calculate_score(current_name, current_category, f)
                if score > best_score:
                    best_score = score
                    best_file = f
            
            # Confidence Threshold: 45
            if best_file and best_score >= 45:
                new_image = f"assets/images/real/{best_file}"
                if new_image != current_image:
                    line = line.replace(current_image, new_image)
                    fixes += 1
                    matches_found.append(f"{current_name} -> {best_file} ({best_score})")

        new_lines.append(line)

    with open('products.js', 'w') as f:
        f.write('\n'.join(new_lines))

    print(f"Restoration Complete:")
    print(f"  Total Images Restored/Updated: {fixes}")
    print(f"\nSample of new matches:")
    for m in matches_found[:30]:
        print(f"  {m}")

if __name__ == "__main__":
    run_restoration()
