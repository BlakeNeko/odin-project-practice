import { content } from '../index.js';

function renderContactPage() {
  content.innerHTML = '';
  content.className = 'contact';

  const title = document.createElement('h1');
  title.textContent = 'Contact Us';

  const emailMessage = document.createElement('p');
  emailMessage.textContent = 'Email: contact@yarp.com';

  const phoneMessage = document.createElement('p');
  phoneMessage.textContent = 'Phone: 1234-5678-9900';

  const locationMessage = document.createElement('p');
  locationMessage.textContent = 'Location: Earth';

  content.appendChild(title);
  content.appendChild(emailMessage);
  content.appendChild(phoneMessage);
  content.appendChild(locationMessage);
}

export { renderContactPage };
