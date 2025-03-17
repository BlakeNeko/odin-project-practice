import { renderHomePage } from './scripts/home.js';
import { renderMenuPage } from './scripts/menu.js';
import { renderContactPage } from './scripts/contact.js';
import './style.css';

const content = document.querySelector('#content');

renderContactPage();

export { content };
