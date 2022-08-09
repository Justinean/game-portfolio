class Platform {
    constructor(x, y, width, height) {
        this.startX = x;
        this.startY = y;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.colliding = false;
        this.sideCollision = false;
    }

    checkCollision() {
        this.colliding = false;
        this.under = player.height + player.position.y - this.y;
        this.over = this.y + this.height - player.position.y;
        this.right = player.width + player.position.x - this.x;
        this.left = this.x + this.width - player.position.x;
        if (this.under > 0 && this.over > 0 && this.right > 0 && this.left > 0) this.colliding = true;
        player.isColliding = this.colliding;
        if (this.colliding) this.handleCollision();
    }

    handleCollision() {
        if (player.metaPosition.x > canvas.width / 2 && player.metaPosition.x <= 6430){
            if (this.over > this.under) {
                if (this.left > this.under) {
                    if (this.right > this.under) {
                        player.metaPosition.y =this.startY - this.y;
                        for (let i of platforms) {
                            i.y += this.under;
                        }
                        for (let i of texts) {
                            i.y += this.under;
                        }
                        for (let i of pictures) {
                            i.y += this.under;
                        }
                        for (let i of projects) {
                            i.y += this.under;
                        }
                        if (!player.isJumping) {
                            player.velocity.y = 0
                            player.canJump = true;
                        }
                        player.isJumping = false;
                    } else {
                        for (let i of platforms) {
                            i.x += this.right;
                        }
                        for (let i of texts) {
                            i.x += this.right;
                        }
                        for (let i of pictures) {
                            i.x += this.right;
                        }
                        for (let i of projects) {
                            i.x += this.right;
                        }
                        this.sideCollision = true;
                    }
                } else {
                    if (this.right > this.left) {
                        for (let i of platforms) {
                            i.x -= this.left;
                        }
                        for (let i of texts) {
                            i.x -= this.left;
                        }
                        for (let i of pictures) {
                            i.x -= this.left;
                        }
                        for (let i of projects) {
                            i.x -= this.left;
                        }
                        this.sideCollision = true;
                    } else {
                        for (let i of platforms) {
                            i.x += this.right;
                        }
                        for (let i of texts) {
                            i.x += this.right;
                        }
                        for (let i of pictures) {
                            i.x += this.right;
                        }
                        for (let i of projects) {
                            i.x += this.right;
                        }
                        this.sideCollision = true;
                    }
                }
            } else {
                if (this.left > this.over) {
                    if (this.right > this.over) {
                        for (let i of platforms) {
                            i.y -= this.over;
                        }
                        for (let i of texts) {
                            i.y -= this.over;
                        }
                        for (let i of pictures) {
                            i.y -= this.over;
                        }
                        for (let i of projects) {
                            i.y -= this.over;
                        }
                        player.velocity.y = 0
                    } else {
                        for (let i of platforms) {
                            i.x += this.right;
                        }
                        for (let i of texts) {
                            i.x += this.right;
                        }
                        for (let i of pictures) {
                            i.x += this.right;
                        }
                        for (let i of projects) {
                            i.x += this.right;
                        }
                        this.sideCollision = true;
                    }
                } else {
                    if (this.right > this.left) {
                        for (let i of platforms) {
                            i.x -= this.left;
                        }
                        for (let i of texts) {
                            i.x -= this.left;
                        }
                        for (let i of pictures) {
                            i.x -= this.left;
                        }
                        for (let i of projects) {
                            i.x -= this.left;
                        }
                        this.sideCollision = true;
                    } else {
                        for (let i of platforms) {
                            i.x += this.right;
                        }
                        for (let i of texts) {
                            i.x += this.right;
                        }
                        for (let i of pictures) {
                            i.x += this.right;
                        }
                        for (let i of projects) {
                            i.x += this.right;
                        }
                        this.sideCollision = true;
                    }
                }
            }
        } else {
            if (this.over > this.under) {
                if (this.left > this.under) {
                    if (this.right > this.under) {
                        player.metaPosition.y =this.startY - this.y;
                        for (let i of platforms) {
                            i.y += this.under;
                        }
                        for (let i of texts) {
                            i.y += this.under;
                        }
                        for (let i of pictures) {
                            i.y += this.under;
                        }
                        for (let i of projects) {
                            i.y += this.under;
                        }
                        if (!player.isJumping) {
                            player.velocity.y = 0
                            player.canJump = true;
                        }
                        player.isJumping = false;
                    } else {
                        player.position.x -= this.right;
                        this.sideCollision = true;
                    }
                } else {
                    if (this.right > this.left) {
                        player.position.x += this.left;
                        this.sideCollision = true;
                    } else {
                        player.position.x -= this.right;
                        this.sideCollision = true;
                    }
                }
            } else {
                if (this.left > this.over) {
                    if (this.right > this.over) {
                        for (let i of platforms) {
                            i.y -= this.over;
                        }
                        for (let i of texts) {
                            i.y -= this.over;
                        }
                        for (let i of pictures) {
                            i.y -= this.over;
                        }
                        for (let i of projects) {
                            i.y -= this.over;
                        }
                        player.velocity.y = 0
                    } else {
                        player.position.x -= this.right;
                        this.sideCollision = true;
                    }
                } else {
                    if (this.right > this.left) {
                        player.position.x += this.left;
                        this.sideCollision = true;
                    } else {
                        player.position.x -= this.right;
                        this.sideCollision = true;
                    }
                }
            }
        }
    }

    render() {
        ctx.fillStyle = "#666666";
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

const platforms = [
    new Platform(-50, window.innerHeight - 5199, 100, 5000),
    new Platform(-500, window.innerHeight - 200, 2000, 600),
    new Platform(1000, window.innerHeight - 400, 300, 50),
    new Platform(1500, window.innerHeight - 600, 300, 50),
    new Platform(1000, window.innerHeight - 800, 300, 50),
    new Platform(1500, window.innerHeight - 1000, 300, 50),
    new Platform(1000, window.innerHeight - 1200, 300, 50),
    new Platform(2000, window.innerHeight - 200, 1000, 600),
    new Platform(3250, window.innerHeight - 400, 300, 50),
    new Platform(2750, window.innerHeight - 600, 300, 50),
    new Platform(3000, window.innerHeight - 800, 300, 50),
    new Platform(3300, window.innerHeight - 1000, 1000, 50),
    new Platform(3500, window.innerHeight - 200, 1000, 600),
    new Platform(-200, window.innerHeight - 1400, 1000, 50),
    new Platform(1500, window.innerHeight - 1400, 300, 50),
    new Platform(1000, window.innerHeight - 1600, 300, 50),
    new Platform(1500, window.innerHeight - 1800, 300, 50),
    new Platform(2000, window.innerHeight - 2000, 300, 50),
    new Platform(2500, window.innerHeight - 2200, 1100, 50),
    new Platform(1700, window.innerHeight - 400, 300, 50),
    new Platform(4750, window.innerHeight - 400, 300, 50),
    new Platform(5250, window.innerHeight - 400, 300, 50),
    new Platform(5850, window.innerHeight - 200, 1600, 600),
    new Platform(4750, window.innerHeight - 600, 300, 50),
    new Platform(5250, window.innerHeight - 800, 300, 50),
    new Platform(5750, window.innerHeight - 1000, 300, 50),
    new Platform(6250, window.innerHeight - 1200, 1000, 50),
    new Platform(7370, window.innerHeight - 5199, 50, 5000)
]