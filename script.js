const welcome = document.getElementById("welcome");
let x = 100, y = 100;
let dx = 4, dy = 4;

function moveWelcome() {
  const rect = welcome.getBoundingClientRect();
  const screenW = window.innerWidth;
  const screenH = window.innerHeight;

  if (x + rect.width >= screenW || x <= 0) dx *= -1;
  if (y + rect.height >= screenH || y <= 0) dy *= -1;

  x += dx;
  y += dy;

  welcome.style.left = `${x}px`;
  welcome.style.top = `${y}px`;

  requestAnimationFrame(moveWelcome);
}

moveWelcome();
