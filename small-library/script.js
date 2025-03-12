let myLibrary = [];

function Book(name, author, pages, isRead) {
  this.id = crypto.randomUUID();
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

let book1 = new Book('One', 'Tom', '30', false);
let book2 = new Book('Two', 'Mike', '50', false);
let book3 = new Book('Three', 'John', '60', false);

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

function listBook() {
  console.log(JSON.parse(JSON.stringify(myLibrary)));
}

addBook(book1);
addBook(book2);
addBook(book3);
listBook();
removeBook(book2.id);
listBook();
changeBookIsRead(book1.id);
listBook();
