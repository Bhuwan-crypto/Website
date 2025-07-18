const welcome = document.getElementById("welcome");

let x = Math.random() * window.innerWidth;
let y = Math.random() * window.innerHeight;

// Speed in pixels per second
let dx = 150;
let dy = 150;

let lastTime = null;

// Rainbow colors to cycle through
const colors = [
  "#FF0000", // red
  "#FF7F00", // orange
  "#FFFF00", // yellow
  "#00FF00", // green
  "#0000FF", // blue
  "#4B0082", // indigo
  "#8B00FF", // violet
];

let colorIndex = 0;
let colorChangeInterval = 100; // ms
let colorTimer = 0;

function animate(timestamp) {
  if (!lastTime) lastTime = timestamp;
  const delta = (timestamp - lastTime) / 1000; // seconds elapsed
  lastTime = timestamp;

  const rect = welcome.getBoundingClientRect();

  // Move by speed*time
  x += dx * delta;
  y += dy * delta;

  // Bounce horizontally
  if (x + rect.width >= window.innerWidth) {
    dx = -Math.abs(dx);
    x = window.innerWidth - rect.width;
  } else if (x <= 0) {
    dx = Math.abs(dx);
    x = 0;
  }

  // Bounce vertically
  if (y + rect.height >= window.innerHeight) {
    dy = -Math.abs(dy);
    y = window.innerHeight - rect.height;
  } else if (y <= 0) {
    dy = Math.abs(dy);
    y = 0;
  }

  welcome.style.left = x + "px";
  welcome.style.top = y + "px";

  // Handle rainbow color change
  colorTimer += delta * 1000; // convert to ms
  if (colorTimer >= colorChangeInterval) {
    colorIndex = (colorIndex + 1) % colors.length;
    welcome.style.color = colors[colorIndex];
    colorTimer = 0;
  }

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
