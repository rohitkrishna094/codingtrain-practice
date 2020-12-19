let boundaries = [];
const numberOfBoundaries = 4;
let ray;
let particle;
let xoff = 0;
let yoff = 10000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numberOfBoundaries; i++) {
    let x1 = random(width);
    let x2 = random(width);
    let y1 = random(height);
    let y2 = random(height);
    boundaries[i] = new Boundary(x1, y1, x2, y2);
  }
  boundaries.push(new Boundary(0, 0, width, 0));
  boundaries.push(new Boundary(width, 0, width, height));
  boundaries.push(new Boundary(width, height, 0, height));
  boundaries.push(new Boundary(0, height, 0, 0));
  particle = new Particle();
}

function draw() {
  background(0);
  for (let boundary of boundaries) {
    boundary.show();
  }
  //   particle.update(noise(xoff) * width, noise(yoff) * height);
  particle.update(mouseX, mouseY);
  particle.show();
  particle.look(boundaries);

  xoff += 0.005;
  yoff += 0.005;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
