import re
import os

JS_PATH = "script.js"
IMAGE_DIR = "assets/images/real/"

with open(JS_PATH, "r", encoding="utf-8") as f:
    content = f.read()

# Pattern to find image paths
img_matches = re.findall(r'image: "(assets/images/real/[^"]+)"', content)
kenyan_matches = re.finditer(r'\{[^}]*isKenyan: true[^}]*\}', content, re.DOTALL)

missing = []
for img in img_matches:
    if not os.path.exists(img):
        missing.append(img)

print(f"Total Unique Image Paths in JS: {len(set(img_matches))}")
print(f"Missing Files: {len(missing)}")
if missing:
    print("Sample Missing:")
    for m in missing[:10]:
        print(f"  - {m}")
