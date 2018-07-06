let inc = 0.1,
    scl = 10,
    cols, rows, zOff = 0,
    fr, particles = [],
    flowfield;

let incSlider, angleSlider, magSlider;

function setup() {
    createCanvas(400, 400);
    colorMode(HSB, 255);
    cols = floor(width / scl);
    rows = floor(height / scl);
    fr = createP('');
    createP('inc, angle multiplier, magnitude')
    incSlider = createSlider(0.001, 1, 0.1, 0.001);
    angleSlider = createSlider(0.5, 1024 * 1024, 4, 0.5);
    magSlider = createSlider(0.5, 50, 1, 0.5);

    flowfield = new Array(cols * rows);

    for (let i = 0; i < 300; i++) {
        particles[i] = new Particle();
    }
    background(51);

}

function draw() {
    let yOff = 0;
    for (let y = 0; y < rows; y++) {
        let xOff = 0;
        for (let x = 0; x < cols; x++) {
            let index = x + y * cols;
            let angle = noise(xOff, yOff, zOff) * TWO_PI * angleSlider.value();
            let v = p5.Vector.fromAngle(angle);
            v.setMag(magSlider.value());
            flowfield[index] = v;
            xOff += incSlider.value();
            stroke(0, 50);
        }
        yOff += incSlider.value();
        zOff += 0.00001;
    }

    for (let i = 0; i < particles.length; i++) {
        particles[i].follow(flowfield);
        particles[i].update();
        particles[i].edges();
        particles[i].show();
        let c = particles[i].backColor();
        // background(c.r, c.g, c.b, c.a);
    }

    fr.html(floor(frameRate()));
}