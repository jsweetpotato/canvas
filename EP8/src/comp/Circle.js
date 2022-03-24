import { ctx, canvas } from "../App.js";

function Circle(x, y, radian, color, offset) {
  this.x = x;
  this.y = y;
  this.radian = radian;
  this.color = color;
  this.offset = offset;

  this.draw = () => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radian, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  };


}

export default Circle;