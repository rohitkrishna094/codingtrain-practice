class Particle {

    constructor(x, y, speed, trailLength, r, life) {
        this.x = x || random(width);
        this.y = y || random(height);
        this.speed = speed || 10;
        this.l = trailLength || 100;
        this.r = r || 24;
        this.history = [];
        this.life = life || 3;

        this.isDead = false;
        setTimeout(() => {
            this.isDead = true;
        }, this.life * 1000);

        this.timer = 0;
        setInterval(() => {
            this.timer += 10;
        }, 10);

        this.color = 0;
        this.deathRingR = this.r;
        this.deathRing = false;
        this.deathRingPercent = 0.6;
    }

    update() {
        this.history.push(createVector(this.x, this.y));
        if (this.history.length > this.l) {
            this.history.shift();
        }
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);

        // bound check
        if (this.y <= 0) this.y = height - 10;
        if (this.y >= height) this.y = 10;
        if (this.x <= 0) this.x = width - 10;
        if (this.x >= width) this.x = 10;
        if (this.timer >= this.deathRingPercent * this.life * 1000) {
            this.deathRing = true;
        }

        if (this.deathRing) {
            this.deathRingR = map(this.timer, this.life * 1000 * this.deathRingPercent, this.life * 1000, this.r, this.r * 2);
        }
    }

    show() {

        for (let i = 0; i < this.history.length; i++) {
            let pos = this.history[i];
            noStroke();
            let col = map(i, 0, this.history.length, 100, 20);
            fill(col);
            let d = map(i, 0, this.history.length, 1, 24);
            ellipse(pos.x, pos.y, d, d);
        }

        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.r, this.r);

        if (this.deathRing) {
            stroke(random(100, 200), 0, 0);
            fill(random(100, 200), 0, 0);
            ellipse(this.x, this.y, this.deathRingR - random(0, this.r * 0.8), this.deathRingR - random(0, this.deathRingR * 0.2));
        }
        fill(random(200, 255), random(255));
        ellipse(this.x, this.y, this.r / 3, this.r / 3);
    }

}