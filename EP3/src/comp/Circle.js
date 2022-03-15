import {ctx } from "../App.js"

function Circle(x, y, radius, color) {
   this.x = x;
   this.y = y;
   this.radius = radius;
   this.color = color;

   this.draw = () => {
     ctx.beginPath();
     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
     ctx.fillStyle = this.color;
     ctx.fill();
   };

   this.update = () => {
     this.draw();
   };
}

export default Circle;