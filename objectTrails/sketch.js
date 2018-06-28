let particles = [];
let info;
let clearButton;
let clearBG = false;

window.onload = function() {
  clearCanvasButton = document.getElementById('clearCanvasButton');
  clearCanvasButton.addEventListener('click', clearCanvas);
  clearBackgroundButton = document.getElementById('clearBackgroundButton');
  clearBackgroundButton.addEventListener('click', clearBackground);
};

function clearCanvas() {
  clear();
  background(70);
}

function clearBackground() {
  clearBG = !clearBG;
}

function generateParticles(n, rand) {
  for (let i = 0; i < n; i++) {
    let speed = random(10, 20);
    let trailLength = floor(random(10, 100));
    let radius = random(8, 24);
    let life = floor(random(1, 20));
    if (rand) {
      x = random(width);
      y = random(height);
    } else {
      x = mouseX;
      y = mouseY;
    }
    particle = new Particle(x, y, speed, trailLength, radius, life);
    particles.push(particle);
  }
}

function setup() {
  let canvas = createCanvas(800, 600);
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;

  canvas.mousePressed(() => {
    generateParticles(1, false);
  });
  canvas.doubleClicked(() => {
    generateParticles(10, true);
  });
  canvas.position(x, y + 10);
  info = select('#info');
  particle = new Particle(200, 200, 10, 100, 24, 3);
  particles.push(particle);
  background(70);
}

function draw() {
  let deathCount = 0;
  let avgLifeSpan = 0;
  let maxLifeSpan = Number.MIN_VALUE;

  if (clearBG) {
    background(70);
  }

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.show();
    if (p.isDead) {
      particles.splice(i, 1);
    }
    if (p.deathRing) {
      deathCount++;
    }
    avgLifeSpan += p.life;
    if (maxLifeSpan < p.life) maxLifeSpan = p.life;
  }
  avgLifeSpan /= particles.length;
  if (isNaN(avgLifeSpan)) avgLifeSpan = 0;
  if (maxLifeSpan <= Number.MIN_VALUE) maxLifeSpan = 0;

  let s = `# of particles: ${
    particles.length
  }; # of particles about to die: ${deathCount}; Average lifespan: ${parseFloat(avgLifeSpan).toPrecision(2)} seconds;`;
  s += ` maxLifeSpan lifespan of a particle: ${maxLifeSpan}`;
  info.html(s);
}
