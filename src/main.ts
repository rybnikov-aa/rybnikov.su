import '../css/style.css';
import mainHtml from './main.html?raw';

function createCard(title: string, content: string): HTMLElement {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div class="card-image"></div>
    <div class="card-content">
      <h3>${title}</h3>
      <p>${content}</p>
    </div>
  `;
  return card;
}

function init(): void {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = mainHtml;

  const familyFeed = document.getElementById('family-feed');
  const worldFeed = document.getElementById('world-feed');

  if (familyFeed && worldFeed) {
    // Placeholder content for "В семье"
    for (let i = 1; i <= 3; i++) {
      familyFeed.appendChild(createCard(`Семейное событие ${i}`, 'Описание важного события в нашей семье...'));
    }

    // Placeholder content for "В мире"
    for (let i = 1; i <= 3; i++) {
      worldFeed.appendChild(createCard(`Мировая новость ${i}`, 'Интересная новость из внешнего мира...'));
    }
  }
}

document.addEventListener('DOMContentLoaded', init);
