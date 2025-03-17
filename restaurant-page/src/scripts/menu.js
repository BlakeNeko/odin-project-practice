import { content } from '../index.js';

const dishesData = [
  { name: 'Neapolitan Pizza', price: 10 },
  { name: 'Cacciatore', price: 30 },
  { name: 'Pasta', price: 12 },
  { name: 'Latte', price: 7 },
  { name: 'Beef Noodles', price: 10 },
  { name: 'Yangzhou fried rice', price: 12 },
];

function renderMenuPage() {
  content.innerHTML = '';
  content.className = 'menu';

  const title = document.createElement('h1');
  title.textContent = 'Our Menu';

  const menu = document.createElement('ul');

  for (let each of dishesData) {
    menu.appendChild(createSingleCard(each));
  }

  content.appendChild(title);
  content.appendChild(menu);
}

function createSingleCard(dishData) {
  let cardContainer = document.createElement('li');

  let dishCard = document.createElement('div');
  dishCard.className = 'dish-card';
  let dishCardTitle = document.createElement('h1');
  dishCardTitle.textContent = dishData.name;
  let dishCardPrice = document.createElement('p');
  dishCardPrice.textContent = `$ ${dishData.price}`;
  dishCard.appendChild(dishCardTitle);
  dishCard.appendChild(dishCardPrice);

  cardContainer.appendChild(dishCard);

  return cardContainer;
}

export { renderMenuPage };
