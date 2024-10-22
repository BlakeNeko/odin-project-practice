let myLibrary = [];
let bookIndex = 0;

function Book(index, title, author, read) {
  this.index = index;
  this.title = title;
  this.author = author;
  this.read = read;
}

function createBook() {
  const title = document.getElementById('input-title').value;
  const author = document.getElementById('input-author').value;
  const read = document.getElementById('input-read').checked;
  if (title === '' || author === '') {
    alert('请完整填写图书信息');
    return;
  }
  const newBook = new Book(bookIndex, title, author, read);
  bookIndex++;
  return newBook;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function toggleReadStatus(index) {
  const book = myLibrary.find((book) => book.index === index);
  if (book) {
    book.read = !book.read;
  }
}

function removeBook(index) {
  myLibrary = myLibrary.filter((book) => book.index !== index);
}

function createBookCard(book) {
  const bookCard = document.createElement('div');
  bookCard.classList.add('card');
  bookCard.setAttribute('data-index', book.index);
  const cardContent = document.createElement('div');
  cardContent.classList.add('card-content');
  bookCard.appendChild(cardContent);
  const cardFooter = document.createElement('div');
  cardFooter.classList.add('card-footer');
  bookCard.appendChild(cardFooter);
  const title = document.createElement('h2');
  title.textContent = book.title;
  const author = document.createElement('p');
  author.textContent = `作者：${book.author}`;
  const readStatus = document.createElement('p');
  readStatus.textContent = `是否已读：${book.read ? '已读' : '未读'}`;
  const toggleReadButton = document.createElement('button');
  toggleReadButton.textContent = book.read ? '标记为未读' : '标记为已读';
  toggleReadButton.addEventListener('click', () => {
    toggleReadStatus(book.index);
    updateBookCard(book);
  });
  const removeButton = document.createElement('button');
  removeButton.textContent = '删除';
  removeButton.addEventListener('click', () => {
    removeBook(book.index);
    bookCard.remove();
  });
  cardContent.appendChild(title);
  cardContent.appendChild(author);
  cardContent.appendChild(readStatus);
  cardFooter.appendChild(toggleReadButton);
  cardFooter.appendChild(removeButton);
  return bookCard;
}

function updateBookCard(book) {
  const bookCard = document.querySelector(`[data-index="${book.index}"]`);
  const title = bookCard.querySelector('h2');
  const author = bookCard.querySelector('p');
  const readStatus = bookCard.querySelector('p:last-child');
  const toggleReadButton = bookCard.querySelector('button');
  title.textContent = book.title;
  author.textContent = `作者：${book.author}`;
  readStatus.textContent = `是否已读：${book.read ? '已读' : '未读'}`;
  toggleReadButton.textContent = book.read ? '标记为未读' : '标记为已读';
}

document.addEventListener('DOMContentLoaded', () => {
  const addBookButton = document.querySelector('#add-book');
  const main = document.querySelector('main');

  addBookButton.addEventListener('click', () => {
    const newBook = createBook();
    if (newBook) {
      addBookToLibrary(newBook);
      const bookCard = createBookCard(newBook);
      main.appendChild(bookCard);

      const title = document.getElementById('input-title');
      const author = document.getElementById('input-author');
      const read = document.getElementById('input-read');

      title.value = '';
      author.value = '';
      read.checked = false;
    }
  });
});
