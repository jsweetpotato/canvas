import { canvas } from "../App.js";

const size = 100;
let distance = 5;
innerWidth < 500 ? (distance = 3) : (distance = 5);

const adjust = {
  x: innerWidth / 2 - (100 * distance) / 2,
  y: innerHeight / 2 - (100 * distance) / 2,
};

const resize = (init) => {
  addEventListener("resize", () => {
    innerWidth < 500 ? (distance = 3) : (distance = 5);
    canvas.height = innerHeight;
    canvas.width = innerWidth;
    adjust.x = innerWidth / 2 - (size * distance) / 2;
    adjust.y = innerHeight / 2 - (size * distance) / 2;
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

export { mouse, adjust, distance, size, resize };
