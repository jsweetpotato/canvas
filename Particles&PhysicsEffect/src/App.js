import Particle from "./comp/Particle.js";

export const canvas = document.querySelector("canvas");
export const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

function App() {
  this.init = () => {
    this.create();
    this.animate();
  };

  let particleArray = [];
  let size = 30;
  if (innerWidth < 900) size = innerWidth / 30;

  const adjustX = innerWidth / 20 - size * 1.2;
  const adjustY = innerHeight / 20 - size / 1.4;

  ctx.fillStyle = "white";
  ctx.font = `${size}px Verdana`;
  ctx.fillText("Hello", 0, size);
  const textCoordinates = ctx.getImageData(0, 0, 100, 100);

  this.create = () => {
    particleArray = [];
    for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
      for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
        if (textCoordinates.data[y * 4 * textCoordinates.width + x * 4 + 3] > 128) {
          const positionX = x + adjustX;
          const positionY = y + adjustY;
          particleArray.push(new Particle(positionX * 10, positionY * 10));
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
