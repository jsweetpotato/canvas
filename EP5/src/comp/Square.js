import { ctx } from "../App.js";

function Square(x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.w = width;
  this.h = height;
  this.color = color;

  this.draw = () => {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  };

  this.update = () => {
    this.draw();
  };
}

export default Square;
