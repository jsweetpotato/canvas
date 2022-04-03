import { canvas } from "../App.js";

const resize = (init) => {
  addEventListener("resize", () => {
    canvas.height = innerHeight;
    canvas.width = innerWidth;
    init();
  });
};

const mouse = {
  x: undefined,
  y: undefined,
  radius: 60 + innerWidth / 20,
};

addEventListener("mousemove", ({ clientX, clientY }) => {
  mouse.x = clientX;
  mouse.y = clientY;
});

export { mouse, resize };
