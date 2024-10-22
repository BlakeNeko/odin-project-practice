import imageMenu01 from '../images/menu_01.jpg';
import imageMenu02 from '../images/menu_02.jpg';
import imageMenu03 from '../images/menu_03.jpg';
import imageMenu04 from '../images/menu_04.jpg';

function renderMenuContent() {
  const menuImageList = [imageMenu01, imageMenu02, imageMenu03, imageMenu04];
  const productNameList = [
    'Chestnut matcha dessert plate',
    'Tale of Genji Matcha Sweets Plate',
    'Tale of Genji Strawberry Matcha Sweets Plate',
    'Sakura Matcha Sweets Plate',
  ];

  const content = document.querySelector('#content');

  const h2 = document.createElement('h2');
  h2.textContent = 'Sweets Plate Menu';
  content.appendChild(h2);

  const images = document.createElement('div');
  images.classList.add('images');
  for (let i = 0; i < 4; i++) {
    const image = document.createElement('img');
    image.src = menuImageList[i];

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    const h3 = document.createElement('h3');
    h3.textContent = productNameList[i];
    productInfo.appendChild(image);
    productInfo.appendChild(h3);
    images.appendChild(productInfo);
  }
  content.appendChild(images);
}

export { renderMenuContent };
