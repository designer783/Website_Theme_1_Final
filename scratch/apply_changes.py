import os
import re

base_dir = "f:/EP_FahdQ/ET_Websites/Digital_Build_Sheet_Final_Files/Final_ integrated_Version/Digital-Build-Sheet-Oct6_Final/Digital-Build-Sheet-Oct6_Final"

def read_file(path):
    with open(os.path.join(base_dir, path), 'r', encoding='utf-8') as f:
        return f.read()

def write_file(path, content):
    with open(os.path.join(base_dir, path), 'w', encoding='utf-8') as f:
        f.write(content)

# 1. Performance - Lazy load images
for comp in ['src/components/VehicleStorytelling.tsx', 'src/components/WindowStickerSection.tsx', 'src/pages/HomePage.tsx']:
    c = read_file(comp)
    c = c.replace('<img\n', '<img loading="lazy"\n')
    c = c.replace('<img src=', '<img loading="lazy" src=')
    write_file(comp, c)

# 3. Form Placeholders
vin_box = read_file('src/components/VinLookupBox.tsx')
vin_box = vin_box.replace('placeholder="ENTER VIN NUMBER"', 'placeholder="VIN: ENTER VIN NUMBER *"')
vin_box = vin_box.replace('placeholder="ENTER LICENSE PLATE"', 'placeholder="Plate: *Enter Plate Number"')
write_file('src/components/VinLookupBox.tsx', vin_box)

print("Applied some changes.")
