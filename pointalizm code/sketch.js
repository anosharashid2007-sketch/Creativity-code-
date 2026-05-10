let img;

function preload() {
  img = loadImage('Tree.pick.jpg'); 
}

function setup() {
  createCanvas(400, 400);
  background(255);
  img.resize(width, height);
}

function draw() {
  let x = floor(random(width));
  let y = floor(random(height));

  let c = img.get(x, y); 

  noStroke();
  fill(c);
  circle(x, y, 12); 
}