import fs from 'fs';
import path from 'path';

const srcDir = 'C:\\Users\\rahul\\.gemini\\antigravity-ide\\brain\\ac354486-098d-4bdc-b416-1360ce23f397';
const destDir = path.join(process.cwd(), 'public', 'images', 'plants');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);

const map = {
  'areca_palm': 'areca_palm.png',
  'peace_lily': 'peace_lily.png',
  'bougainvillea': 'bougainvillea.png',
  'hibiscus': 'hibiscus.png',
  'aloe_vera': 'aloe_vera.png',
  'mint_plant': 'mint_plant.png',
  'rubber_plant': 'rubber_plant.png'
};

files.forEach(file => {
  for (const [key, destName] of Object.entries(map)) {
    if (file.startsWith(key) && file.endsWith('.png')) {
      fs.copyFileSync(path.join(srcDir, file), path.join(destDir, destName));
      console.log(`Copied ${file} to ${destName}`);
    }
  }
});
