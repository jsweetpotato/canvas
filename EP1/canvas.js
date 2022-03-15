const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

// // Rect
// ctx.fillStyle = "rgba(255,50,20,0.5)";
// ctx.fillRect(100, 100, 100, 100);
// ctx.fillStyle = "rgba(5,255,20,0.5)";
// ctx.fillRect(400, 300, 100, 100);

// // Line
// ctx.beginPath();
// ctx.moveTo(300, 200);
// ctx.lineTo(400, 100);
// ctx.lineTo(800, 300);
// ctx.strokeStyle = "rgba(255,50,20,0.5)";
// ctx.stroke();

// // Arc / Circle
// ctx.beginPath();
// ctx.arc(600, 600, 100, 0, Math.PI, false);
// ctx.stroke();

// for (let i = 0; i < 10; i++) {
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   ctx.beginPath();
//   ctx.arc(x, y, 50, 0, Math.PI * 2, false);
//   ctx.strokeStyle = "blue";
//   ctx.stroke();
// }

// Animation

const mouse = {
  x: undefined,
  y: undefined,
};

const MAX_RADIUS = 100;

const COLORS = ["#34B1BF", "#34BFBF", "#F2B138", "#F2A03D", "#D9593D"];

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

document.querySelector("body").addEventListener("mousemove", ({ x, y }) => {
  mouse.x = x;
  mouse.y = y;
});

document.querySelector("body").addEventListener("mouseleave", () => {
  mouse.x = undefined;
  mouse.y = undefined;
  console.log("mouseleave");
});

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = COLORS[Math.floor(Math.random() * 5)];

  this.draw = () => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  };

  this.update = () => {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    if (mouse.x - this.x < 100 && mouse.x - this.x > -100 && mouse.y - this.y < 100 && mouse.y - this.y > -100) {
      if (this.radius < MAX_RADIUS) this.radius += 2;
    }
    if (this.radius > this.minRadius) this.radius -= 1;

    this.draw();
  };
}

let circleArray = [];

const init = () => {
  circleArray = [];

  for (let i = 0; i < 400; i++) {
    let radius = Math.random() * 4 + 1;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    // max = innerWidth - radius, min = radius
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 8;
    let dy = (Math.random() - 0.5) * 8;
    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
};

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  const length = circleArray.length;
  for (let i = 0; i < length; i++) {
    circleArray[i].update();
  }
}
init();
animate();
