import { canvas, size } from "../App.js";

const adjust = {
  x: innerWidth / 2 - 600 / 2,
  y: innerHeight / 2 - 600 / 2,
};

const resize = (init) => {
  addEventListener("resize", () => {
    canvas.height = innerHeight;
    canvas.width = innerWidth;
    adjust.x = innerWidth / 2 - (size * 5) / 2;
    adjust.y = innerHeight / 2 - (size * 5) / 2;
    mouse.radius = 30 + innerWidth / 20;
    init();
  });
};

const mouse = {
  x: undefined,
  y: undefined,
  radius: 30 + innerWidth / 20,
};

addEventListener("mousemove", ({ clientX, clientY }) => {
  mouse.x = clientX;
  mouse.y = clientY;
});

addEventListener("touchmove", ({ targetTouches }) => {
  mouse.x = targetTouches[0].pageX;
  mouse.y = targetTouches[0].pageY;
});

addEventListener("touchend", () => {
  mouse.x = undefined;
  mouse.y = undefined;
});

export { mouse, adjust, resize };
