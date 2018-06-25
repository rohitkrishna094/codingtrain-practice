class Cell {
    constructor(x, y, r, c) {
        this.r = r || 80;
        this.x = x || random(this.r / 2, width - this.r / 2);
        this.y = y || random(this.r / 2, height - this.r / 2);
        this.c = c || color(0, random(100, 255), random(100, 255), 100);
        this.speed = random(3, 10);
    }

    move() {
        let xVel = random(-1, 1);
        let yVel = random(-1, 1);
        this.x += xVel * this.speed;
        this.y += yVel * this.speed;
        //assumes canvas is a square
        let d = dist(this.x, this.y, width / 2, height / 2);
        if (d > (sqrt(2) * width / 2)) {
            this.x = random(width / 4, width / 8);
            this.y = random(width / 4, width / 8);
        }
    }

    show() {
        noStroke();
        fill(this.c);
        ellipse(this.x, this.y, this.r, this.r);
    }

    clicked(x, y) {
        let d = dist(this.x, this.y, x, y);
        return (d < this.r) ? true : false;
    }

    mitosis() {
        return new Cell(this.x, this.y, this.r / sqrt(2), color(random(100, 255), 0, random(100, 255), 100));
    }

}