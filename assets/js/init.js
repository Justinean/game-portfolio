const canvas = document.querySelector("#game");
const ctx = canvas.getContext('2d');
let worldLocation = {x: 0, y: 0};

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})