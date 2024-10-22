const imagesUrls = ['./images/1.jpg', './images/2.jpg', './images/3.jpg'];

const imageContainer = document.querySelector('.image-container');
const prevButton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button');

let currentImageIndex = 0;
imageContainer.style.backgroundImage = `url(${imagesUrls[currentImageIndex]})`;

function prevImage() {
  currentImageIndex = currentImageIndex - 1;
  if (currentImageIndex < 0) {
    currentImageIndex = imagesUrls.length - 1;
  }
  imageContainer.style.backgroundImage = `url(${imagesUrls[currentImageIndex]})`;
  updateActiveIndicator();
}

function nextImage() {
  currentImageIndex = currentImageIndex + 1;
  if (currentImageIndex >= imagesUrls.length) {
    currentImageIndex = 0;
  }
  imageContainer.style.backgroundImage = `url(${imagesUrls[currentImageIndex]})`;
  updateActiveIndicator();
}

function initIndicator() {
  const indicator = document.querySelector('.indicator');
  for (let i = 0; i < imagesUrls.length; i++) {
    let dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
      currentImageIndex = i;
      imageContainer.style.backgroundImage = `url(${imagesUrls[currentImageIndex]})`;
      updateActiveIndicator();
    });
    indicator.appendChild(dot);
  }
}

function updateActiveIndicator() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    if (index === currentImageIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  prevButton.addEventListener('click', prevImage);
  nextButton.addEventListener('click', nextImage);
  initIndicator();
  updateActiveIndicator();
});
