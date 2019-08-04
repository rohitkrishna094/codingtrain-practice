function setup() {
  createCanvas(200, 200);
}

function draw() {
  console.log('objectss');
  background(51);
  loadPixels();
  for (let y = 0; y < height; y++) {
    for (let x = 0; y < width; x++) {
      let index = x + y * width;
      pixels[index] = 255;
      pixels[index + 1] = 0;
      pixels[index + 2] = 255;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
}
