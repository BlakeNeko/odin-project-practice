import { content } from '../index.js';

function renderMenuPage() {
  content.innerHTML = '';
  content.className = 'menu';

  const title = document.createElement('h1');
  title.textContent = 'Our Menu';

  const menu = document.createElement('ul');
  const cardContainer = document.createElement('li');
  menu.appendChild(cardContainer);

  const dishCard = document.createElement('div');
  dishCard.className = 'dish-card';
  const dishCardTitle = document.createElement('h1');
  dishCardTitle.textContent = 'Neapolitan Pizza';
  const dishCardPrice = document.createElement('p');
  dishCardPrice.textContent = '$ 10';
  dishCard.appendChild(dishCardTitle);
  dishCard.appendChild(dishCardPrice);

  cardContainer.appendChild(dishCard);

  content.appendChild(title);
  content.appendChild(menu);
}

export { renderMenuPage };
