import { renderHomePage } from './scripts/home.js';
import { renderMenuPage } from './scripts/menu.js';
import './style.css';

const content = document.querySelector('#content');

renderMenuPage();

export { content };
