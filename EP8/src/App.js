import { mouse, resize } from "./utils/event.js";
import Circle from "./comp/Circle.js";

import { noise } from "../node_modules/@chriscourses/perlin-noise/index.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d", { alpha: false });

canvas.height = innerHeight;
canvas.width = innerWidth;

function App() {
  this.init = () => {
    this.animate();
  };

  this.circles = [];
  for (let i = 0; i < 100; i++) {
    this.circles.push(new Circle(canvas.width / 2, canvas.height / 2, 30, `hsl(${Math.random() + i + 100}, 100%, 50%)`, i * 0.01));
  }

  let time = 0;

  this.animate = () => {
    requestAnimationFrame(this.animate);
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 100; i++) {
      this.circles[i].draw();
      this.circles[i].x = noise(time + this.circles[i].offset + 20) * canvas.width;
      this.circles[i].y = noise(time + this.circles[i].offset) * canvas.height;
    }
    // this.circle.update();
    // this.circle.x = mouse.x;
    // this.circle.y = noise(time) * canvas.height;
    time += 0.005;
  };
}

let app = new App();
app.init();

export { ctx, canvas };
