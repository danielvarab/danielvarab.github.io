const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const GRID = 64;
const CELL = canvas.width / GRID;
const MAX_HEAT = 36;

const stops = [
  [0,   0,   0],
  [255, 0,   0],
  [255, 255, 0],
  [255, 255, 255],
];

const colors = [];
(function buildPalette() {
  for (let i = 0; i <= MAX_HEAT; i++) {
    const t = i / MAX_HEAT;
    const seg = t * (stops.length - 1);
    const idx = Math.floor(seg);
    const frac = seg - idx;
    const a = stops[idx];
    const b = stops[Math.min(idx + 1, stops.length - 1)];
    const r = Math.round(a[0] + (b[0] - a[0]) * frac);
    const g = Math.round(a[1] + (b[1] - a[1]) * frac);
    const bl = Math.round(a[2] + (b[2] - a[2]) * frac);
    colors.push(`rgb(${r},${g},${bl})`);
  }
})();

let grid = [];
for (let y = 0; y < GRID; y++) {
  grid.push(new Array(GRID).fill(0));
}

function step() {
  for (let x = 0; x < GRID; x++) {
    grid[GRID - 1][x] = MAX_HEAT;
  }

  for (let x = 1; x < GRID; x++) {
    for (let y = GRID - 2; y >= 0; y--) {
      const decay = Math.floor(Math.random() * 3);
      const numberBelow = grid[y + 1][x];
      const offset = Math.floor(Math.random() * 3);
      grid[y][x-offset] = Math.max(0, numberBelow - decay);
    }
  }
}

function render() {
  for (let y = 0; y < GRID; y++) {
    for (let x = 0; x < GRID; x++) {
      ctx.fillStyle = colors[grid[y][x]];
      ctx.fillRect(x * CELL, y * CELL, CELL, CELL);
    }
  }
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 1;
  for (let i = 1; i < GRID; i++) {
    ctx.beginPath();
    ctx.moveTo(i * CELL, 0);
    ctx.lineTo(i * CELL, canvas.height);
    ctx.moveTo(0, i * CELL);
    ctx.lineTo(canvas.width, i * CELL);
    ctx.stroke();
  }
}

const FPS = 16;
const FRAME_TIME = 1000 / FPS;
let lastTime = 0;

function loop(now) {
  requestAnimationFrame(loop);
  if (now - lastTime < FRAME_TIME) return;
  lastTime = now;
  step();
  render();
}

requestAnimationFrame(loop);
