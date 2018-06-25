let cells = [];
let count;
let header;

function setup() {
    createCanvas(800, 800);
    count = random(3, 10);
    header = select("h1");
    for (let i = 0; i < count; i++) {
        cells.push(new Cell());
    }
}

function draw() {

    background(50);
    for (let i = 0; i < cells.length; i++) {
        cells[i].move();
        cells[i].show();
    }

    if (cells.length <= 0) {
        header.html("Game Over!!! Refresh to play again");
        background(0, 150, 200);
    }
}

function mousePressed() {
    for (let i = cells.length - 1; i >= 0; i--) {

        if (cells[i].clicked(mouseX, mouseY)) {
            cells.push(cells[i].mitosis());
            cells.push(cells[i].mitosis());
            cells.splice(i, 1);
        }
        if (cells[i].r <= 40) {
            cells.splice(i, 1);
        }
    }
}