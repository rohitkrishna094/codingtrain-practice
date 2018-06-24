let a = 0;
let sponge = [];

function setup() {
    createCanvas(800, 800, WEBGL);
    normalMaterial();

    let b = new Box(0, 0, 0, 400);
    sponge.push(b);
}

function draw() {
    var locX = mouseX - width / 2;
    var locY = mouseY - height / 2;
    pointLight(150, 250, 255, locX, locY, 1000);
    // ambientMaterial(250);
    background(50);
    rotateX(a);
    rotateY(a * 0.4);
    rotateZ(a * 0.1);
    for (let i = 0; i < sponge.length; i++) {
        sponge[i].show();
    }
    a += 0.01;
}

function mousePressed() {
    let next = [];
    for (let i = 0; i < sponge.length; i++) {
        let b = sponge[i];
        let newBoxes = b.generate();
        next = next.concat(newBoxes);
    }
    sponge = next;
}