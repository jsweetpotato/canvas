const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const cw = (canvas.width = 300);
const ch = (canvas.height = 300);
const cx = cw / 2,
  cy = ch / 2;

ctx.lineWidth = 0.1;
ctx.strokeStyle = "#d9d9d9";
// variables for the hypotrochoid
let a = 90;
let b = 15;
let h = 50;
// an array where to save the points used to draw the track
let track = [];
// add points to the track array. This will be used to draw the track for the particles
for (var t = 0; t < 2 * Math.PI; t += 0.01) {
  let o = {};
  o.x = cx + (a - b) * Math.cos(t) + h * Math.cos(((a - b) / b) * t);
  o.y = cy + (a - b) * Math.sin(t) - h * Math.sin(((a - b) / b) * t);
  track.push(o);
}

// a function to draw the track
function drawTrack(ry) {
  ctx.beginPath();
  ctx.moveTo(ry[0].x, ry[0].y);
  for (let t = 1; t < ry.length; t++) {
    ctx.lineTo(ry[t].x, ry[t].y);
  }
  ctx.closePath();
  ctx.stroke();
}

// a class of points that are moving on the track
class Point {
  constructor(pos) {
    this.pos = pos;
    this.r = 3; // the radius of the circle
    this.history = [];
    this.historyLength = 40;
  }

  update(newPos) {
    let old_pos = {};
    old_pos.x = this.pos.x;
    old_pos.y = this.pos.y;
    // save the old position in the history array
    this.history.push(old_pos);
    // if the length of the track is longer than the max length allowed remove the extra elements
    if (this.history.length > this.historyLength) {
      this.history.shift();
    }
    // gry the new position on the track
    this.pos = newPos;
  }

  draw() {
    for (let i = 0; i < this.history.length; i++) {
      // calculate the alpha value for every element on the history array
      let alp = (i * 1) / this.history.length;
      // set the fill style
      ctx.fillStyle = `rgba(0,0,0,${alp})`;
      // draw an arc
      ctx.beginPath();
      ctx.arc(this.history[i].x, this.history[i].y, this.r, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
}

// 2 points on the track
let p = new Point(track[0]);
let p1 = new Point(track[~~(track.length / 2)]);

let frames = 0;

let n, n1;

function Draw() {
  requestAnimationFrame(Draw);
  ctx.clearRect(0, 0, cw, ch);
  // indexes for the track position
  n = frames % track.length;
  n1 = (~~(track.length / 2) + frames) % track.length;
  // draw the track
  drawTrack(track);
  // update and draw the first point
  p.update(track[n]);
  p.draw();
  // update and draw the second point
  p1.update(track[n1]);
  p1.draw();
  // increase the frames counter
  frames++;
}

Draw();
