import { randomIntFromRange, randomColor, distance } from "./utils/utils.js";
import Particle from "./comp/Particle.js";
import { mouse, resize } from "./utils/event.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.height = innerHeight;
canvas.width = innerWidth;

let particles = [];
const colors = ["#D2940", "#005C53", "#9FC131", "#DBF227", "#D6D58E"];

function App() {
  this.init = () => {
    this.create();
    this.animate();
    resize(this.create);
  };

  this.create = () => {
    particles = [];
    for (let i = 0; i < 200; i++) {
      const radius = randomIntFromRange(20, 30);
      let x = randomIntFromRange(radius, canvas.width - radius);
      let y = randomIntFromRange(radius, canvas.height - radius);
      const color = randomColor(colors);
      if (i === 0) continue;
      for (let j = 0; j < particles.length; j++) {
        if (distance(x, y, particles[j].x, particles[j].y) - radius * 2 < 0) {
          x = randomIntFromRange(radius, canvas.width - radius);
          y = randomIntFromRange(radius, canvas.height - radius);
          j = -1;
        }
      }

      particles.push(new Particle(x, y, radius, color));
    }
  };

  this.animate = () => {
    requestAnimationFrame(this.animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
    }
  };
}

let app = new App();
app.init();

export { ctx, canvas, particles };
