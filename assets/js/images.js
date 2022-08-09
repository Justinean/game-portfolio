const drawImages = () => {
    for (let i of pictures) {
        i.render();
    }
}

class Picture {
    constructor(src, x, y) {
        this.img = document.createElement("img");
        console.log(this.img);
        this.img.src = src;
        console.log(this.img);
        this.x = x;
        this.y = y;
        this.startX = x;
        this.startY = y;
    }

    render() {
        ctx.drawImage(this.img, this.x, this.y);
    }
}

const pictures = [
    new Picture("../assets/images/me1.jpg", 100, window.innerHeight - 1900)
]