const welcome = document.getElementById("welcome");

let x = Math.random() * window.innerWidth;
let y = Math.random() * window.innerHeight;

let dx = 150; // pixels per second speed
let dy = 150;

let lastTime = null;

function animate(timestamp) {
  if (!lastTime) lastTime = timestamp;
  const delta = (timestamp - lastTime) / 1000;

  const rect = welcome.getBoundingClientRect();

  x += dx * delta;
  y += dy * delta;

  // Bounce on horizontal edges
  if (x + rect.width >= window.innerWidth) {
    dx = -Math.abs(dx);
    x = window.innerWidth - rect.width;
  } else if (x <= 0) {
    dx = Math.abs(dx);
    x = 0;
  }

  // Bounce on vertical edges
  if (y + rect.height >= window.innerHeight) {
    dy = -Math.abs(dy);
    y = window.innerHeight - rect.height;
  } else if (y <= 0) {
    dy = Math.abs(dy);
    y = 0;
  }

  // Use GPU accelerated transform for smooth movement
  welcome.style.transform = `translate(${x}px, ${y}px)`;

  lastTime = timestamp;
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
