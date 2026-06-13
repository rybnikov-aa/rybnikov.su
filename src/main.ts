import '../css/style.css';

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

  app.innerHTML = `
    <header class="header">
      <nav class="nav">
        <div class="logo">rybnikov.su</div>
        <ul class="nav-links">
          <li><a href="#" class="active">Главная</a></li>
          <li><a href="#">Фотогалерея</a></li>
        </ul>
      </nav>
    </header>

    <main class="container">
      <section class="feed-world">
        <h2 class="feed-title">В мире</h2>
        <div class="feed-grid" id="world-feed"></div>
      </section>

      <section class="feed-family">
        <h2 class="feed-title">В семье</h2>
        <div class="feed-grid" id="family-feed"></div>
      </section>
    </main>

    <footer class="footer">
      <p>&copy; 2026 rybnikov.su</p>
    </footer>
  `;

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
