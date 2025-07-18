const welcome = document.getElementById("welcome");

let x = Math.random() * window.innerWidth;
let y = Math.random() * window.innerHeight;
let dx = 0.05;
let dy = 0.05;

function animate() {
  const rect = welcome.getBoundingClientRect();

  // Bounce off left/right
  if (x + rect.width >= window.innerWidth || x <= 0) {
    dx *= -1;
  }

  // Bounce off top/bottom
  if (y + rect.height >= window.innerHeight || y <= 0) {
    dy *= -1;
  }

  x += dx;
  y += dy;

  welcome.style.left = `${x}px`;
  welcome.style.top = `${y}px`;

  requestAnimationFrame(animate);
}

animate();
