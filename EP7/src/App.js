// import * as dot from "../node_modules/dat.gui";
import { mouse, resize } from "./utils/event.js";

// const gui = new dot.GUI();

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d", { alpha: false });

canvas.height = innerHeight;
canvas.width = innerWidth;

function App() {
  this.init = () => {
    this.animate();
    // playMusic();
  };

  // gui.add(wave, "y", 0, canvas.height / 2);
  // gui.add(wave, "length", -0.01, 0.01);
  // gui.add(wave, "amplitude", -100, 100);

  // const loadMusic = fetch("./images/music.mp3").then((audio) => {
  //   return new Audio(audio.url);
  // });

  // const playMusic = async () => {
  //   const music = await loadMusic;
  //   if (typeof music.loop == "boolean") music.loop = true;

  //   canvas.addEventListener("click", () => {
  //     console.log("play");
  //     console.dir(music);
  //     music.volume = 0.2;
  //     music.play();
  //   });

  //   music.addEventListener(
  //     "ended",
  //     () => {
  //       this.currentTime = 0;
  //       this.play();
  //     },
  //     false
  //   );
  // };

  const wave = {
    y: canvas.height / 2,
    length: 0.01,
    amplitude: 300,
    frequency: 0.005,
  };

  const strokeColor = {
    h: 200,
    s: 50,
    l: 50,
  };

  let increament = wave.frequency;

  this.animate = () => {
    requestAnimationFrame(this.animate);
    ctx.fillStyle = "rgba(0,0,0,0.03)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    for (let i = 0; i < canvas.width; i++) {
      ctx.lineTo(i, canvas.height / 2 + Math.sin(i * wave.frequency + increament) * wave.amplitude * Math.sin(increament));
    }
    ctx.strokeStyle = `hsl(${strokeColor.h * Math.sin(increament)}, ${strokeColor.s}%,${strokeColor.l}%)`;
    ctx.stroke();
    increament += wave.frequency;
  };
}

let app = new App();
app.init();

export { ctx, canvas };
