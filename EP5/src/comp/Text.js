import { ctx } from "../App.js";

function Text(x, y) {
  this.x = x;
  this.y = y;
  this.baseY = y;
  this.alpha = 1;
  this.size = 40;

  this.draw = () => {
    ctx.globalAlpha = "1";
    ctx.fillStyle = `rgba(125,225,0,${this.alpha})`;
    ctx.font = `${this.size}px Verdana`;
    ctx.textAlign = "center";
    ctx.fillText("collision", this.x, this.y);
  };
  this.update = () => {
    this.y -= 2;
    this.alpha -= 0.02;
    this.size += 1;
    if (this.baseY - this.y > 100 || this.y > this.baseY) {
      this.y = this.baseY;
      this.alpha = 1;
      this.size = 40;
    }
    this.draw();
  };
}

export default Text;
