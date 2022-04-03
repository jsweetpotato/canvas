import Circle from "./comp/Circle.js";
import Text from "./comp/Text.js";
import { mouse } from "./utils/event.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d", { alpha: false });

canvas.height = innerHeight;
canvas.width = innerWidth;

function App() {
  this.init = () => {
    this.animate();
  };

  addEventListener("click", () => {
    for (let i = 0; i < 200; i++) {
      const dy = Math.floor(Math.random() * 15 + 8);
      this.circles[i].dy = dy;
    }
  });

  const message = "Click";
  const max = 2;
  const min = -2;

  this.circles = [];
  for (let i = 0; i < 200; i++) {
    const color = `hsl(${Math.random() + i + 100}, 100%, 50%)`;
    const x = Math.random() * (canvas.width - 60) + 30;
    const dx = Math.floor(Math.random() * (max - min + 1) + min);
    const dy = Math.random() * 4 + 0.5;
    this.circles.push(new Circle(x, 10, 10, color, dx, dy));
  }

  this.text = new Text(canvas.width / 2, canvas.height / 2, message);

  this.animate = () => {
    requestAnimationFrame(this.animate);
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.text.update();
    this.circles.forEach((circle) => {
      circle.update();
    });
  };
}

let app = new App();
app.init();

export { ctx, canvas };
