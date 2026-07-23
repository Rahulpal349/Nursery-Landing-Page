const Jimp = require('jimp');
Jimp.read('public/logo.png').then(image => {
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];
    
    // Check if mostly white
    if (r > 200 && g > 200 && b > 200) {
      this.bitmap.data[idx + 3] = 0; // Make transparent
    } else {
      // It's the dark text, color it green based on darkness
      const darkness = 255 - ((r + g + b) / 3);
      this.bitmap.data[idx + 0] = 118; // #76
      this.bitmap.data[idx + 1] = 184; // #b8
      this.bitmap.data[idx + 2] = 82;  // #52
      this.bitmap.data[idx + 3] = darkness > 255 ? 255 : (darkness < 0 ? 0 : darkness); 
    }
  });
  image.write('public/logo_green.png', () => console.log('Done'));
}).catch(err => console.error(err));
