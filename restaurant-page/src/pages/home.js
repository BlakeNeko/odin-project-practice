import imageHome01 from '../images/home_01.png';
import imageHome02 from '../images/home_02.png';
import imageHome03 from '../images/home_03.png';

function renderHomeContent() {
  const homeImageList = [imageHome01, imageHome02, imageHome03];

  const content = document.querySelector('#content');

  const slogan = document.createElement('h1');
  slogan.textContent = 'Indulge in the Green Goodness.';
  content.appendChild(slogan);

  const images = document.createElement('div');
  images.classList.add('images');
  for (let i = 0; i < 3; i++) {
    const image = document.createElement('img');
    image.src = homeImageList[i];
    images.appendChild(image);
  }
  content.appendChild(images);

  const paragraph = document.createElement('p');
  paragraph.textContent = `Discover the rich, earthy flavors of matcha in every bite of our
          delectable treats. Made from the finest green tea leaves, our matcha
          desserts offer a unique blend of sweetness and umami, perfect for those
          seeking a delightful balance of taste and health. Whether you’re a
          matcha aficionado or new to this vibrant green superfood, our menu is
          crafted to deliver a refreshing and satisfying experience that will
          leave you craving more.`;
  content.appendChild(paragraph);
}

export { renderHomeContent };
