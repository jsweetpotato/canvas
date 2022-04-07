import { canvas } from "../App.js";

const resize = (init) => {
  addEventListener("resize", () => {
    canvas.height = innerHeight;
    canvas.width = innerWidth;
    init();
  });
};

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

addEventListener("mousemove", ({ clientX, clientY }) => {
  mouse.x = clientX;
  mouse.y = clientY;
});

export { mouse, resize };
