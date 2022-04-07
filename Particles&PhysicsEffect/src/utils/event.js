import { canvas } from "../App.js";


const mouse = {
  x: undefined,
  y: undefined,
  radius: 60 + innerWidth / 20,
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

export { mouse};
