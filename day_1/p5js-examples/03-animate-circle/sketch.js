let x_coord;

function setup() {
  createCanvas(400, 400);
  // set color of background
  background(220);
  
  // set the fill color of any shapes we draw
  fill(255, 204, 0);
  // set the width of the line around any shape we draw
  strokeWeight(4);
  // set the color of the line around any shape we draw
  stroke(0, 204, 255);
  
  x_coord = 150;
}

function draw() {
  x_coord = sin(millis() / 1000) * 150 + 200;
  background(220);
  ellipse(x_coord, 200, 90, 90);
}