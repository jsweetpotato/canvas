import { randomIntFromRange, randomColor, distance } from "./utils/utils.js";
import Particle from "./comp/Particle.js";
import { mouse, resize } from "./utils/event.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d", { alpha: false });

canvas.height = innerHeight;
canvas.width = innerWidth;

function App() {
  this.init = () => {
    this.create();
    this.animate();
    resize(this.create);
  };

  this.particles = [];
  this.colors = ["#EDAAF0", "#D0A0FA", "#9A92E0", "#9DBBFA", "#AADDF0"];
  this.opacity = 0.05;

  this.create = () => {
    this.particles = [];

    for (let i = 0; i < 80; i++) {
      const color = randomColor(this.colors);
      this.particles.push(new Particle(0, 0, 7, color));
    }
  };

  let number = 1;
  this.animate = () => {
    requestAnimationFrame(this.animate);
    ctx.save();
    ctx.globalAlpha = this.opacity;

    ctx.fillStyle = `rgb(255,255,255)`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].x = mouse.x;
      this.particles[i].y = mouse.y;
      this.particles[i].update();
    }
  };
}

let app = new App();
app.init();

export { ctx, canvas };
