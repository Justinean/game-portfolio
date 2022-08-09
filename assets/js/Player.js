class Player {
    constructor(x, y) {
        this.startPosition = { x, y };
        this.position = { x, y };
        this.velocity = { x: 10, y: 0 }
        this.metaPosition = { x: canvas.width / 2, y: 0 }
        this.width = 25;
        this.height = 50;
        this.aPressed = false;
        this.dPressed = false;
        this.canJump = true;
        this.isJumping = false;
        this.hasMoved = false;
        this.isColliding = false;
        this.transitioned = true;
    }

    keyPress(e) {
        if (e.key === "d") return this.dPressed = true;
        if (e.key === "a") return this.aPressed = true;
        if (e.key === " ") return this.jump();
    }

    unKeyPress(e) {
        if (e.key === "d") return this.dPressed = false;
        if (e.key === "a") return this.aPressed = false;
        if (e.key === " ") return this.unJump();
    }

    jump() {
        // if (!this.canJump) return;
        this.canJump = false;
        this.isJumping = true;
        this.velocity.y = -15;
    }

    unJump() {
        if (!this.isJumping) return;
        if (this.velocity.y > 0) return;
        this.velocity.y = 0;
    }

    gravity() {
        this.velocity.y += .5;
    }

    move() {
        if (!(this.velocity.y > 0 && this.velocity.y < 1)) {
            this.metaPosition.y += this.velocity.y
        }
        if (this.metaPosition.y >= 1000) {
            this.metaPosition.y = 0;
            this.metaPosition.x = canvas.width / 2;
            this.position = {x: canvas.width / 2, y: canvas.height - 300};
            for (let i of platforms) {
                i.x = i.startX;
                i.y = i.startY;
            }
            for (let i of texts) {
                i.x = i.startX;
                i.y = i.startY;
            }
            for (let i of pictures) {
                i.x = i.startX;
                i.y = i.startY;
            }
            for (let i of projects) {
                i.x = i.startX;
                i.y = i.startY;
            }
        }
        if (this.metaPosition.x > canvas.width / 2 && this.metaPosition.x <= 6430) {
            if (!this.transitioned && this.metaPosition.x < 2000) {
                this.metaPosition.x = canvas.width / 2
                this.transitioned = true;
            }
            if (this.metaPosition.y > 100) {
                this.position.y += this.velocity.y
            }
            if (this.dPressed) this.metaPosition.x += this.velocity.x
            if (this.aPressed) this.metaPosition.x -= this.velocity.x
            for (let i of platforms) {
                if (this.metaPosition.y <= 100) {
                    i.y -= this.velocity.y;
                }
                if (this.dPressed && this.aPressed || (!this.dPressed && !this.aPressed)) continue;
                if (this.dPressed) {
                    i.x -= this.velocity.x;
                    if (i.colliding && i.sideCollision) {
                        this.metaPosition.x = i.startX;
                        i.sideCollision = false;
                        continue;
                    }
                }
                if (this.aPressed) {
                    i.x += this.velocity.x;
                    if (i.colliding)
                    if (i.colliding && i.sideCollision) {
                        this.metaPosition.x = i.startX + i.width;
                        i.sideCollision = false;
                        continue;
                    }
                }
            }
            for (let i of texts) {
                if (this.metaPosition.y <= 100) {
                    i.y -= this.velocity.y;
                }
                if (this.dPressed && this.aPressed || (!this.dPressed && !this.aPressed)) continue;
                if (this.dPressed) i.x -= this.velocity.x;
                if (this.aPressed) i.x += this.velocity.x;
            }
            for (let i of pictures) {
                if (this.metaPosition.y <= 100) {
                    i.y -= this.velocity.y;
                }
                if (this.dPressed && this.aPressed || (!this.dPressed && !this.aPressed)) continue;
                if (this.dPressed) i.x -= this.velocity.x;
                if (this.aPressed) i.x += this.velocity.x;
            }
            for (let i of projects) {
                if (this.metaPosition.y <= 100) {
                    i.y -= this.velocity.y;
                }
                if (this.dPressed && this.aPressed || (!this.dPressed && !this.aPressed)) continue;
                if (this.dPressed) i.x -= this.velocity.x;
                if (this.aPressed) i.x += this.velocity.x;
            }
        } else {
            if (this.transitioned && this.metaPosition.x < 2000) { 
                this.metaPosition.x = canvas.width / 2;
                this.transitioned = false;
            }
            for (let i of platforms) {
                if (this.metaPosition.y <= 100) {
                    i.y -= this.velocity.y;
                }
            }
            for (let i of texts) {
                if (this.metaPosition.y <= 100) {
                    i.y -= this.velocity.y;
                }
            }
            for (let i of pictures) {
                if (this.metaPosition.y <= 100) {
                    i.y -= this.velocity.y;
                }
            }
            for (let i of projects) {
                if (this.metaPosition.y <= 100) {
                    i.y -= this.velocity.y;
                }
            }
            if (this.dPressed && this.aPressed || (!this.dPressed && !this.aPressed)) return;
            if (this.dPressed) {
                this.position.x += this.velocity.x;
                if (this.metaPosition.x < 2000) {
                    this.metaPosition.x = this.position.x;
                } else {
                    this.metaPosition.x = this.position.x + 6430;
                }
            }
            if (this.aPressed) {
                this.position.x -= this.velocity.x;
                if (this.metaPosition.x < 2000) {
                    this.metaPosition.x = this.position.x;
                } else {
                    this.metaPosition.x = this.position.x + 6430 - canvas.width / 2;
                }
            }
            if (this.position.x < 0) this.position.x = 0;
        }
        this.hasMoved = true;
        this.isColliding = false;
    }

    render() {
        ctx.fillStyle = "black";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const player = new Player(canvas.width / 2, canvas.height - 300);