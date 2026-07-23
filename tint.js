import { Jimp } from 'jimp';

async function processImage() {
  try {
    const image = await Jimp.read('public/logo.png');
    image.scan((x, y, idx) => {
      const r = image.bitmap.data[idx + 0];
      const g = image.bitmap.data[idx + 1];
      const b = image.bitmap.data[idx + 2];
      
      // If mostly white, make transparent
      if (r > 200 && g > 200 && b > 200) {
        image.bitmap.data[idx + 3] = 0; // alpha = 0
      } else {
        // Dark text -> green
        const darkness = 255 - ((r + g + b) / 3);
        image.bitmap.data[idx + 0] = 118; // #76
        image.bitmap.data[idx + 1] = 184; // #b8
        image.bitmap.data[idx + 2] = 82;  // #52
        image.bitmap.data[idx + 3] = darkness > 255 ? 255 : (darkness < 0 ? 0 : darkness);
      }
    });
    await image.write('public/logo_green.png');
    console.log('Done');
  } catch (err) {
    console.error(err);
  }
}

processImage();
