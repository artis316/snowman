class Snowman {
    constructor(x, y, baseRadius) {
        this.x = x;
        this.y = y;
        this.baseRadius = baseRadius;
        this.snowEaten = 1;
    }

    draw(ctx) {
        const r1 = this.baseRadius;
        const r2 = r1 * 0.8;
        const r3 = r1 * 0.5;
        const rh = r1 * 0.4;

        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';

        // Draw the circles
        ctx.beginPath();
        ctx.arc(this.x, this.y, r1, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();

        if (this.snowEaten >= 10) {
            ctx.beginPath();
            ctx.arc(this.x, this.y - r1 - r2, r2, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
        }

        if (this.snowEaten >= 20) {
            ctx.beginPath();
            ctx.arc(this.x, this.y - r1 - r2 - r3, r3, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
        }

         if (this.snowEaten >= 30) {
            ctx.beginPath();
            ctx.arc(this.x + r2 + rh, this.y - r1 - r2, rh, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
        }

        if (this.snowEaten >= 40) {
            ctx.beginPath();
            ctx.arc(this.x - r2 - rh, this.y - r1 - r2, rh, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
        }

        if (this.snowEaten >= 50) {
            ctx.font = "20px Arial";
            ctx.fillStyle = "black";
            ctx.fillText("Happy New Year!", this.x - 60, this.y - 150);
        }
        ctx.fillStyle = 'black';
        ctx.font = `${r1 / 2}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.snowEaten, this.x, this.y);

    }
}