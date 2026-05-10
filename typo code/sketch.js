function setup() {
  createCanvas(500, 400);
  textAlign(CENTER, CENTER);
  textFont("Arial Black");
}

function draw() {
  
  for (let y = 0; y < height; y++) {
    let r = map(y, 0, height, 20, 80);
    let g = map(y, 0, height, 30, 120);
    let b = map(y, 0, height, 60, 200);
    stroke(r, g, b);
    line(0, y, width, y);
  }

 
  fill(255);
  textSize(64);
  textStyle(BOLD);
  text("HELLO GUYS", width / 2, height / 2);
}