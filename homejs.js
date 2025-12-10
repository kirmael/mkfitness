setInterval(() => {
  const f = document.createElement('div');
  f.className = 'flake';
  f.textContent = '*';


  const maxX = window.innerWidth - 30; 
  const x = Math.random() * maxX;

  f.style.left = x + 'px';
  f.style.animationDuration = (Math.random() * 5 + 5) + 's';
  document.body.appendChild(f);
  setTimeout(() => f.remove(), 10000);
}, 200);
