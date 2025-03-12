let myLibrary = [];

function Book(name, author, pages, isRead) {
  this.id = crypto.randomUUID();
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBook(book) {
  myLibrary.push(book);
}

function removeBook(id) {
  myLibrary = myLibrary.filter((each) => each.id !== id);
}

function changeBookIsRead(id) {
  let book = myLibrary.find((each) => each.id === id);
  book.isRead = !book.isRead;
}

function renderBookCards() {
  let main = document.querySelector('main');

  main.innerHTML = '';

  myLibrary.forEach((each) => {
    let bookCard = renderSingleBookCard(each);
    main.appendChild(bookCard);
  });
}

function renderSingleBookCard(book) {
  let bookCard = document.createElement('div');
  bookCard.classList.add('book-card');

  let bookCardInfo = document.createElement('div');
  bookCardInfo.classList.add('info');
  let infoName = document.createElement('h1');
  let infoAuthor = document.createElement('p');
  let infoPages = document.createElement('p');

  bookCardInfo.appendChild(infoName);
  bookCardInfo.appendChild(infoAuthor);
  bookCardInfo.appendChild(infoPages);
  bookCard.appendChild(bookCardInfo);

  let bookCardButtons = document.createElement('div');
  bookCardButtons.classList.add('buttons');
  let markButton = document.createElement('button');
  let deleteButton = document.createElement('button');

  bookCardButtons.appendChild(markButton);
  bookCardButtons.appendChild(deleteButton);
  bookCard.appendChild(bookCardButtons);

  infoName.textContent = book.name;
  infoAuthor.textContent = book.author;
  infoPages.textContent = book.pages;

  if (book.isRead === true) {
    markButton.textContent = 'Mark as unread';
    bookCard.classList.add('strip-read');
  } else {
    markButton.textContent = 'Mark as read';
    bookCard.classList.add('strip-unread');
  }

  deleteButton.textContent = 'Delete';

  bookCard.setAttribute('data-id', book.id);

  markButton.addEventListener('click', handleMarkButtonClick);
  deleteButton.addEventListener('click', handleDeleteButtonClick);

  return bookCard;
}

function handleMarkButtonClick() {
  let bookCard = this.parentElement.parentElement;
  let id = bookCard.getAttribute('data-id');
  changeBookIsRead(id);
  renderBookCards();
}

function handleDeleteButtonClick() {
  let bookCard = this.parentElement.parentElement;
  let id = bookCard.getAttribute('data-id');
  removeBook(id);
  renderBookCards();
}

function handleAddButtonClick(event) {
  event.preventDefault();

  let nameInput = document.querySelector('input#book-name');
  let authorInput = document.querySelector('input#author');
  let pagesInput = document.querySelector('input#pages');
  let readInput = document.querySelector('input#read');

  let name = nameInput.value.trim();
  let author = authorInput.value.trim();
  let pages = pagesInput.value.trim();
  let read = readInput.checked;

  if (name === '' || author === '' || pages === '') {
    alert('Please enter complete infomation.');
  }

  let newBook = new Book(name, author, pages, read);
  addBook(newBook);
  renderBookCards();

  nameInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  readInput.checked = false;
}

function listBook() {
  console.log(JSON.parse(JSON.stringify(myLibrary)));
}

document.addEventListener('DOMContentLoaded', () => {
  let addButton = document.querySelector('form button');
  addButton.addEventListener('click', handleAddButtonClick);

  let book1 = new Book('One', 'Tom', '30', false);
  let book2 = new Book('Two', 'Mike', '50', true);
  let book3 = new Book('Three', 'John', '60', false);
  addBook(book1);
  addBook(book2);
  addBook(book3);

  renderBookCards();
});
