import { randomIntFromRange, randomColor, distance } from "./utils.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.height = innerHeight;
canvas.width = innerWidth;

addEventListener("resize", () => {
  canvas.height = innerHeight;
  canvas.width = innerWidth;

  init();
});

addEventListener("click", () => {
  for (let i = 0; i < 100; i++) {
    const dy = randomIntFromRange(30, 60);
    CircleArray[i].dy = dy;
  }
});

const gravity = 2;
const friction = 0.8;
const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];

function Circle(x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dy = dy;
  this.dx = dx;
  this.radius = radius;
  this.color = color;

  this.draw = () => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  };

  this.update = () => {
    this.y + this.radius + this.dy > canvas.height ? (this.dy = -this.dy * friction) : (this.dy += gravity);
    (this.x + this.radius + this.dx > canvas.width || this.x - this.radius < 0) && (this.dx = -this.dx);
    this.y += this.dy;
    this.x += this.dx;
    this.draw();
  };
}

let CircleArray;

function init() {
  CircleArray = [];

  for (let i = 0; i < 100; i++) {
    const radius = randomIntFromRange(10, 40);
    const width = randomIntFromRange(radius, canvas.width - radius);
    const height = randomIntFromRange(radius, canvas.height - radius);
    const dx = randomIntFromRange(-2, 2);
    const dy = randomIntFromRange(-2, 2);
    const color = randomColor(colors);
    CircleArray.push(new Circle(width, height, dx, dy, radius, color));
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 100; i++) {
    CircleArray[i].update();
  }

  requestAnimationFrame(animate);
}
init();
animate();
