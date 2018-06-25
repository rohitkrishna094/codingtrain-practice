let drops = [];

let count = 500;

function setup() {
    createCanvas(800, 600);
    for (let i = 0; i < count; i++) {
        drops[i] = new Drop();
    }
}

function draw() {
    background(230, 230, 250);
    for (let i = 0; i < count; i++) {
        drops[i].fall();
        drops[i].show();
    }
}