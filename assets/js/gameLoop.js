document.addEventListener("keydown", e => player.keyPress(e));
document.addEventListener("keyup", e => player.unKeyPress(e));

setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.move();
    player.gravity();
    for (let i of platforms) {
        i.checkCollision()
    }
    for (let i of platforms) {
        i.render();
    }
    for (let i of texts) {
        i.render();
    }
    for (let i of pictures) {
        i.render();
    }
    for (let i of projects) {
        i.render();
    }
    player.render();
    player.hasMoved = false;
}, 20)