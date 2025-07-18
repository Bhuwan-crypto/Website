const welcome = document.getElementById("welcome");

let x = window.innerWidth / 2;
let y = window.innerHeight / 2;

let dx = 100; // pixels per second
let dy = 100;

let lastTime = null;

function animate(timestamp) {
  if (!lastTime) lastTime = timestamp;
  const delta = (timestamp - lastTime) / 1000; // seconds elapsed

  const rect = welcome.getBoundingClientRect();

  // Update position by speed * time elapsed
  x += dx * delta;
  y += dy * delta;

  // Bounce off edges
  if (x + rect.width >= window.innerWidth || x <= 0) {
    dx *= -1;
    x = Math.min(Math.max(x, 0), window.innerWidth - rect.width);
  }
  if (y + rect.height >= window.innerHeight || y <= 0) {
    dy *= -1;
    y = Math.min(Math.max(y, 0), window.innerHeight - rect.height);
  }

  welcome.style.left = `${x}px`;
  welcome.style.top = `${y}px`;

  lastTime = timestamp;
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
