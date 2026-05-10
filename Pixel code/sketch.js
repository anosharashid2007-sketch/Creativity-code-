let img;

function preload() {
  img = loadImage("pix.jpg");
}

function setup() {
  createCanvas(400, 400);
  img.resize(400, 400);
}

function draw() {
  image(img, 0, 0);

  if (mouseIsPressed) {
    loadPixels();
    img.loadPixels();

    for (let i = 0; i < pixels.length; i += 4) {

      let r = pixels[i];
      let g = pixels[i + 1];
      let b = pixels[i + 2];

      let gray = (r + g + b) / 3;

      pixels[i] = gray;
      pixels[i + 1] = gray;
      pixels[i + 2] = gray;
    }

    updatePixels();
  }
}