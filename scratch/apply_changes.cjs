const fs = require('fs');
const path = require('path');

const base_dir = "f:/EP_FahdQ/ET_Websites/Digital_Build_Sheet_Final_Files/Final_ integrated_Version/Digital-Build-Sheet-Oct6_Final/Digital-Build-Sheet-Oct6_Final";

function readFile(p) {
    return fs.readFileSync(path.join(base_dir, p), 'utf-8');
}

function writeFile(p, c) {
    fs.writeFileSync(path.join(base_dir, p), c, 'utf-8');
}

// 1. Performance - Lazy load images
const comps = ['src/components/VehicleStorytelling.tsx', 'src/components/WindowStickerSection.tsx', 'src/pages/HomePage.tsx'];
for (const comp of comps) {
    let c = readFile(comp);
    // Be careful not to replace already replaced ones
    c = c.replace(/<img\n/g, '<img loading="lazy"\n');
    c = c.replace(/<img src=/g, '<img loading="lazy" src=');
    writeFile(comp, c);
}

// 3. Form Placeholders
let vinBox = readFile('src/components/VinLookupBox.tsx');
vinBox = vinBox.replace('placeholder="ENTER VIN NUMBER"', 'placeholder="VIN: ENTER VIN NUMBER *"');
vinBox = vinBox.replace('placeholder="ENTER LICENSE PLATE"', 'placeholder="Plate: *Enter Plate Number"');
writeFile('src/components/VinLookupBox.tsx', vinBox);

console.log("Applied basic replacements via Node.");
