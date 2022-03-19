import { ctx } from "../App.js";
import { randomIntFromRange } from "../utils/utils.js";

function Particle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.range = randomIntFromRange(60, 200);
  this.radian = Math.random() * Math.PI * 2;
  this.velocity = 0.02;

  this.draw = () => {
    ctx.beginPath();
    ctx.fillStyle = this.color
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();
  };

  this.update = () => {
    this.radian += this.velocity;
    this.x = this.x + Math.cos(this.radian) * this.range;
    this.y = this.y + Math.sin(this.radian) * this.range;
    this.draw();
  };
}

export default Particle;
