import { content } from '../index.js';
import pizzaPic from '../assets/pizza-small.jpg';

function renderHomePage() {
  content.innerHTML = '';
  content.className = 'home';

  const title = document.createElement('h1');
  title.textContent = 'Welcome!';

  const message1 = document.createElement('h2');
  message1.textContent = 'The best food crafted with the freshest ingredients.';

  const message2 = document.createElement('h2');
  message2.textContent = 'Come check us out!';

  const img = document.createElement('img');
  img.src = pizzaPic;
  img.setAttribute('alt', 'pizza');

  content.appendChild(title);
  content.appendChild(message1);
  content.appendChild(message2);
  content.appendChild(img);
}

export { renderHomePage };
