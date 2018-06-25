class Drop {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.z = random(0, 20);
        this.len = map(this.z, 0, 20, 10, 20);
        this.ySpeed = map(this.z, 0, 20, 1, 20);

        this.fall = () => {
            this.y += this.ySpeed;
            this.ySpeed += 0.1;
            if (this.y > height) {
                this.y = random(-100, 0);
                this.ySpeed = map(this.z, 0, 20, 1, 20);
            }
        };
        this.show = () => {
            let thick = map(this.z, 0, 20, 0.5, 2);
            strokeWeight(thick);
            stroke(138, 43, 226);
            line(this.x, this.y, this.x, this.y + this.len);
        };
    }
}