import './style.css';
import { renderHomeContent } from './pages/home.js';
import { renderMenuContent } from './pages/menu.js';
import { renderAboutContent } from './pages/about.js';

const navs = document.querySelectorAll('nav ul li a');
const content = document.querySelector('#content');

navs.forEach((nav) => {
  if (nav.textContent === 'Home') {
    nav.addEventListener('click', () => {
      content.innerHTML = '';
      renderHomeContent();
    });
  }

  if (nav.textContent === 'Menu') {
    nav.addEventListener('click', () => {
      content.innerHTML = '';
      renderMenuContent();
    });
  }

  if (nav.textContent === 'About') {
    nav.addEventListener('click', () => {
      content.innerHTML = '';
      renderAboutContent();
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  renderHomeContent();
});
