class Grid {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.grid = [];
        this.init();
    }

    init() {
        this.grid = Array(this.height).fill(null).map(() => Array(this.width).fill(0));
        this.grid[5][5] = 1; // Mark starting position as eaten
    }

    isInside(x, y) {
        return x >= 0 && x < this.width && y >= 0 && y < this.height;
    }

    isWalkable(x, y) {
        return this.isInside(x, y) && this.grid[y][x] === 0;
    }

    markEaten(x, y) {
        if (this.isInside(x, y)) {
            this.grid[y][x] = 1;
        }
    }

    draw(ctx) {
        const cellSize = 500 / this.width;
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                ctx.fillStyle = this.grid[y][x] === 0 ? 'white' : 'darkgray';
                ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                ctx.strokeStyle = "black";
                ctx.strokeRect(x * cellSize, y * cellSize, cellSize, cellSize);
            }
        }
    }
}