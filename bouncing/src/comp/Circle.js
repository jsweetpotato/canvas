import { ctx, canvas } from "../App.js";

function Circle(x, y, radius, color, dx, dy) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.dx = dx;
  this.dy = dy;

  const gravity = 0.3;
  const friction = 0.8;

  this.draw = () => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  };

  this.update = () => {
    this.y + this.radius + this.dy > canvas.height ? (this.dy = -this.dy * friction) : (this.dy += gravity);
    (this.x + this.radius + this.dx > canvas.width || this.x - this.radius < 0) && (this.dx = -this.dx);
    if (
      this.radius + this.y > canvas.height / 2 - 90 &&
      this.y - this.radius < canvas.height / 2 + 30 &&
      this.radius + this.x > canvas.width / 2 - 120 &&
      this.x - this.radius < canvas.width / 2 + 120
    ) {
      if (!this.radius + this.y > canvas.height / 2 - 90) this.dx = -this.dx;
      if (this.dy < 0) this.dy -= 2;
      this.dy = -this.dy;
    }

    this.y += this.dy;
    this.x += this.dx;
    this.draw();
  };
}

export default Circle;
