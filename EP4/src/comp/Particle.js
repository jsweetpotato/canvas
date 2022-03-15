import { canvas, ctx, particles } from "../App.js";
import { distance, resolveCollision } from "../utils/utils.js";

function Particle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.mass = 1;
  this.velocity = {
    x: Math.random() - 3,
    y: Math.random() - 3,
  };
  this.radius = radius;
  this.color = color;

  this.draw = () => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  };

  this.update = () => {
    this.draw();
    for (let i = 0; i < particles.length; i++) {
      if (this === particles[i]) continue;
      if (distance(this.x, this.y, particles[i].x, particles[i].y) - (this.radius + particles[i].radius) < 0) {
        console.log("collied");
        resolveCollision(this, particles[i]);
      }
    }

    if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) this.velocity.x = -this.velocity.x;
    if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0) this.velocity.y = -this.velocity.y;

    this.x += this.velocity.x;
    this.y += this.velocity.y;
  };
}

export default Particle;
