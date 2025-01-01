const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const gridSize = 15;
const grid = new Grid(gridSize, gridSize);
const cellSize = canvas.width / gridSize;
let currentX = 5;
let currentY = 5;
const snowman = new Snowman(currentX * cellSize + cellSize / 2, currentY * cellSize + cellSize / 2, cellSize / 2);

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    grid.draw(ctx);
    snowman.draw(ctx);
    requestAnimationFrame(gameLoop);
}

function isGameOver() {
    const adjacentCells = [
        { x: currentX - 1, y: currentY },
        { x: currentX + 1, y: currentY },
        { x: currentX, y: currentY - 1 },
        { x: currentX, y: currentY + 1 },
    ];

    for (const cell of adjacentCells) {
        if (grid.isInside(cell.x, cell.y) && grid.grid[cell.y][cell.x] === 0) {
            return false;
        }
    }
    return true;
}

function handleMove(newX, newY) {
    if (grid.isWalkable(newX, newY)) {
        grid.markEaten(newX, newY);
        currentX = newX;
        currentY = newY;
        snowman.x = currentX * cellSize + cellSize / 2;
        snowman.y = currentY * cellSize + cellSize / 2;
        snowman.snowEaten++;

        if (isGameOver()) {
            setTimeout(() => {
                alert("No more snow left to eat, game over!");
                location.reload();
            }, 10);
        }
    }
}

document.addEventListener('keydown', (event) => {
    let newX = currentX;
    let newY = currentY;
    switch (event.key) {
        case 'ArrowUp': newY--; break;
        case 'ArrowDown': newY++; break;
        case 'ArrowLeft': newX--; break;
        case 'ArrowRight': newX++; break;
    }
    handleMove(newX, newY);
});

canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const gridX = Math.floor(x / cellSize);
    const gridY = Math.floor(y / cellSize);

    if (Math.abs(gridX - currentX) <= 1 && Math.abs(gridY - currentY) <= 1 && (Math.abs(gridX - currentX) + Math.abs(gridY - currentY)) === 1) {
        handleMove(gridX, gridY);
    }
});

gameLoop();