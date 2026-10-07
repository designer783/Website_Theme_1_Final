const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, 'public');

async function optimizeImages() {
  console.log('Optimizing images in', publicDir);
  const files = fs.readdirSync(publicDir);

  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const originalPath = path.join(publicDir, file);
      const ext = path.extname(file);
      const name = path.basename(file, ext);
      
      // We will save it as webp
      const newFileName = `${name}.webp`;
      const newPath = path.join(publicDir, newFileName);
      
      console.log(`Processing: ${file}...`);
      try {
        await sharp(originalPath)
          .resize({ width: 1920, withoutEnlargement: true }) // Downscale large images
          .webp({ quality: 80, effort: 6 }) // Convert to WebP
          .toFile(newPath);
          
        console.log(`-> Saved as ${newFileName}`);
        
        // Delete original file
        fs.unlinkSync(originalPath);
        console.log(`-> Deleted original ${file}`);
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
  console.log('Done optimizing images.');
}

optimizeImages();
