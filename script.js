const welcome = document.getElementById("welcome");

// Starting position (centered)
let x = window.innerWidth / 2;
let y = window.innerHeight / 2;

// Direction & speed (slow)
let dx = 1.2;
let dy = 1.2;

function animate() {
  const rect = welcome.getBoundingClientRect();

  // Bounce off walls
  if (x + rect.width >= window.innerWidth || x <= 0) dx *= -1;
  if (y + rect.height >= window.innerHeight || y <= 0) dy *= -1;

  x += dx;
  y += dy;

  welcome.style.left = `${x}px`;
  welcome.style.top = `${y}px`;

  requestAnimationFrame(animate);
}

// Start animation loop only ONCE
animate();
