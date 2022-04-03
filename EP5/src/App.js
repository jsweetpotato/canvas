import Text from "./comp/Text.js";
import Square from "./comp/Square.js";
import { mouse, resize } from "./utils/event.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.height = innerHeight;
canvas.width = innerWidth;

function App() {
  this.init = () => {
    this.create();
    this.animate();
    resize(this.create);
  };

  this.create = () => {
    this.Square1 = new Square(canvas.width / 2 - 50, canvas.height / 2 - 50, 100, 100, "#1d1d1d");
    this.Square2 = new Square(0, 0, 100, 100, "#dadaf7");
    this.text = new Text(mouse.x, 500);
  };

  this.animate = () => {
    requestAnimationFrame(this.animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.Square1.update();
    this.Square2.x = mouse.x - 50;
    this.Square2.y = mouse.y - 50;
    this.Square2.update();

    if (
      mouse.x + 50 >= this.Square1.x &&
      this.Square1.x + 100 >= mouse.x - 50 &&
      mouse.y + 50 >= this.Square1.y &&
      this.Square1.y + 100 >= mouse.y - 50
    ) {
      this.text.x = mouse.x;
      this.text.baseY = mouse.y - 100;
      this.text.update();
    }
  };
}

let app = new App();
app.init();

export { ctx, canvas };
