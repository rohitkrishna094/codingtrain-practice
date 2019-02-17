let total = 100;
let r;
const pointSize = 0;
let factor = 2;

function setup() {
  createCanvas(400, 400);
  r = width / 2 - width / 12.5;
}

function draw() {
  background(51);
  translate(width / 2, height / 2);
  factor += 0.01;
  stroke(255);
  noFill();
  circle(0, 0, r);
  fill(255);
  for (let i = 0; i < total; i++) {
    const angle = map(i, 0, total, 0, 2 * PI);
    circle(r * cos(angle), r * sin(angle), pointSize);
    const p1 = getVector(i);
    const p2 = getVector(i * factor);
    line(p1.x, p1.y, p2.x, p2.y);
  }
}

function getVector(index) {
  const angle = map(index, 0, total, PI, PI + 2 * PI);
  return { x: r * cos(angle), y: r * sin(angle) };
}
