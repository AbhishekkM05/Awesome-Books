const form = document.querySelector('#book-form');
const bookListContainer = document.querySelector('#book-list');
let books = [];

// display books
function displayBooks() {
  bookListContainer.innerHTML = '';
  books.forEach(({ title, author }, index) => {
    const li = document.createElement('div');
    li.innerHTML = `${title} <br> ${author} <br>`;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
      // remove a Book;
      books.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(books));
      displayBooks();
    });
    li.appendChild(removeBtn);
    const line = document.createElement('hr');
    li.appendChild(line);
    bookListContainer.appendChild(li);
  });
  form.reset();
}

// local storage
const storedBooks = localStorage.getItem('books');
if (storedBooks) {
  books = JSON.parse(storedBooks);
  bookListContainer.innerHTML = '';
  displayBooks();
} else {
  localStorage.setItem('books', JSON.stringify(books));
}

// create a book obj
function BookObj(title, author) {
  this.title = title;
  this.author = author;
}

// add a book to books array
function addBook(event) {
  event.preventDefault();
  const title = event.target[0].value;
  const author = event.target[1].value;
  const newBook = new BookObj(title, author);
  books.push(newBook);
  localStorage.setItem('books', JSON.stringify(books));
  displayBooks();
}

form.addEventListener('submit', addBook);