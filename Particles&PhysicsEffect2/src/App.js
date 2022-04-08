import { url } from "./images/image.js";
import Particle from "./comp/Particle.js";
import { adjust, resize, distance, size } from "./utils/event.js";

const myImg = new Image();
myImg.src = url;

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.height = innerHeight;
canvas.width = innerWidth;

myImg.addEventListener("load", () => {
  function App() {
    this.init = () => {
      this.create();
      this.animate();
      resize(this.create);
    };

    ctx.drawImage(myImg, 0, 0, size, size);
    const pixels = ctx.getImageData(0, 0, size, size);
    ctx.clearRect(0, 0, size, size);

    let particleArray = [];
    this.create = () => {
      particleArray = [];
      const y2 = pixels.height;
      const x2 = pixels.width;
      for (let y = 0; y < y2; y++) {
        for (let x = 0; x < x2; x++) {
          if (pixels.data[y * 4 * x2 + x * 4 + 3] > 128) {
            const red = pixels.data[y * 4 * x2 + x * 4];
            const green = pixels.data[y * 4 * x2 + x * 4 + 1];
            const blue = pixels.data[y * 4 * x2 + x * 4 + 2];
            const posY = y * distance + adjust.y;
            const posX = x * distance + adjust.x;
            particleArray.push(new Particle(posX, posY, red, green, blue));
          }
        }
      }
    };

    this.animate = () => {
      requestAnimationFrame(this.animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const leng = particleArray.length;
      for (let i = 0; i < leng; i++) {
        particleArray[i].draw();
        particleArray[i].update();
      }
    };
  }

  const app = new App();
  app.init();
});

export { ctx, canvas, size };
