import { ctx, canvas } from "../App.js";

function Text(x, y, message) {
  this.x = x;
  this.y = y;
  this.message = message;

  this.draw = () => {
    ctx.font = "100px serif";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(this.message, this.x, this.y);
  };
  this.update = () => {
    this.draw();
  };
}

export default Text;
