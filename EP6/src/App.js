import { randomIntFromRange, randomColor, distance } from "./utils/utils.js";
import Particle from "./comp/Particle.js";
import { mouse, resize } from "./utils/event.js";

// audio fetch로 받아오기

// audio tempo설정
// mousedown시 점점 빠르게 되다가 1에서 멈춤
// mouseup이 되면 점점 느리게 변경 0.5까지 느려짐

// mousedown시 canvas Particle
// 회전 속도(velocity)가 점점 빨라짐 (최대값이 되면 빨라지는게 멈춤)
// radius가 점점 더 커짐 (최대값이 되면 커지는게 멈춤)
// canvas 덮는 rect의 opacity가 점점 낮아짐 (1 -> 0.1)

// mouseup시 canvas Particle
// 회전 속도(velocity)가 점점 느려짐 (최소값이 되면 느려지는게 멈춤)
// radius가 점점 더 작아짐 (최소값이 되면 작아지는게 멈춤)
// canvas 덮는 rect의 opacity가 다시 원래대로 돌아옴 (0.1 -> 1)

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
