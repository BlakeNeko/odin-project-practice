function renderAboutContent() {
  const content = document.querySelector('#content');

  const h1 = document.createElement('h1');
  h1.textContent = 'About Us';
  content.appendChild(h1);

  const p = document.createElement('p');
  const link = document.createElement('a');
  link.href = 'https://www.itohkyuemon.co.jp/';
  link.textContent = 'itohkyuemon.co.jp';
  p.textContent = `A simple web page focusing on using webpack, inspired by `;
  p.appendChild(link);
  content.appendChild(p);
}

export { renderAboutContent };
