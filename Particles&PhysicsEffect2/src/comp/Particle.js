import { ctx } from "../App.js";
import { mouse } from "../utils/event.js";

function Particle(x, y, red, green, blue) {
  this.x = x;
  this.y = y;
  this.red = red;
  this.green = green;
  this.blue = blue;
  this.size = 3;
  this.baseX = this.x;
  this.baseY = this.y;
  this.color = `rgba(${this.red}, ${this.green}, ${this.blue},1)`;
  this.density = Math.random() * 30 + 10;

  this.draw = () => {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
  };

  this.update = () => {
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const forceDirectionX = dx / distance;
    const forceDirectionY = dy / distance;
    const maxDistance = mouse.radius;
    const force = (maxDistance - distance) / maxDistance;
    const directionX = forceDirectionX * force * this.density;
    const directionY = forceDirectionY * force * this.density;
    if (distance < maxDistance) {
      this.x -= directionX;
      this.y -= directionY;
    } else {
      if (this.x !== this.baseX) {
        const dx = this.x - this.baseX;
        this.x -= dx / 10;
      }
      if (this.y !== this.baseY) {
        const dy = this.y - this.baseY;
        this.y -= dy / 10;
      }
    }
  };
}

export default Particle;
