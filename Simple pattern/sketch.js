function setup() {
  createCanvas(400,400);
  background(245);
  noFill();
  strokeWeight(2);

  let gap = 40;

  for (let y = 0; y < height; y += gap) {
    for (let x = 0; x < width; x += gap) {

      // Left curve
      stroke(40);
      arc(x, y, gap * 2, gap * 2, 0, HALF_PI);

      // Right curve
      stroke(170);
      arc(x + gap, y + gap, gap * 2, gap * 2, PI, PI + HALF_PI);
    }
  }
}