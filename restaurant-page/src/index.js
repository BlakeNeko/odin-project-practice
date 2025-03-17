import { renderHomePage } from './scripts/home.js';
import { renderMenuPage } from './scripts/menu.js';
import { renderContactPage } from './scripts/contact.js';
import './style.css';

const content = document.querySelector('#content');
const homeLink = document.querySelector('#home');
const menuLink = document.querySelector('#menu');
const contactLink = document.querySelector('#contact');

document.addEventListener('DOMContentLoaded', () => {
  renderHomePage();

  homeLink.addEventListener('click', renderHomePage);
  menuLink.addEventListener('click', renderMenuPage);
  contactLink.addEventListener('click', renderContactPage);
});

export { content };
