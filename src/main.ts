import '../css/style.css';

function init(): void {
  const app = document.getElementById('app');
  if (!app) return;

  app.textContent = 'rybnikov.su hello world';
}

document.addEventListener('DOMContentLoaded', init);
