import { randomIntFromRange, randomColor, distance } from "./utils/utils.js";
import Circle from "./comp/Circle.js";
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
    this.Circle1 = new Circle(canvas.width / 2, canvas.height / 2, 200, "#6d6a6f");
    this.Circle2 = new Circle(0, 0, 20, "#f6fa6f");
  };

  this.animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.Circle1.update();
    this.Circle2.x = mouse.x;
    this.Circle2.y = mouse.y;
    this.Circle2.update();
    if (distance(this.Circle1.x, this.Circle1.y, this.Circle2.x, this.Circle2.y) < this.Circle1.radius + this.Circle2.radius) this.Circle1.color = "cyan";
    if (distance(this.Circle1.x, this.Circle1.y, this.Circle2.x, this.Circle2.y) > this.Circle1.radius + this.Circle2.radius) this.Circle1.color = "#6d6a6f";
    requestAnimationFrame(this.animate);
  };
}

let app = new App();
app.init();

export { ctx, canvas };
