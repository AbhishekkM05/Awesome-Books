class BookList {
  constructor() {
    this.form = document.querySelector('#book-form');
    this.bookListContainer = document.querySelector('#book-list');
    this.books = [];
    this.newListBook = {};
    this.loadBooksFromLocalStorage();
    this.displayBooks();
  }

  book(title, author) {
    this.newListBook.title = title;
    this.newListBook.author = author;
    return this.newListBook;
  }

  loadBooksFromLocalStorage() {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      this.books = JSON.parse(storedBooks);
    } else {
      localStorage.setItem('books', JSON.stringify(this.books));
    }
  }

  displayBooks() {
    this.bookListContainer.innerHTML = '';
    this.books.forEach((book, index) => {
      const li = document.createElement('div');
      function capitalize(name) {
        return name.split('').map((each, index) => {
          if (index === 0) {
            return each.toUpperCase();
          }
          return each;
        }).join('');
      }
      li.className = 'book';

      const title = capitalize(book.title);
      const author = capitalize(book.author);

      li.innerHTML = `"${title}" by ${author}`;
      const removeBtn = document.createElement('button');
      removeBtn.className = 'remove';
      removeBtn.textContent = 'Remove';
      removeBtn.setAttribute('data-index', index);
      li.appendChild(removeBtn);
      this.bookListContainer.appendChild(li);
    });
    this.form.reset();
  }

  addBook(event) {
    event.preventDefault();
    const title = event.target[0].value;
    const author = event.target[1].value;
    const newBook = this.book(title, author);
    this.books.push(newBook);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  setupEventListeners() {
    this.form.addEventListener('submit', this.addBook.bind(this));
    this.bookListContainer.addEventListener('click', (e) => {
      if (e.target.className === 'remove') {
        this.removeBook(e.target.dataset.index);
      }
    });
  }
}

setInterval(() => {
  const date = new Date();
  const dateTime = date.toDateString();
  const hours = date.getHours() <= 12 ? date.getHours() : date.getHours() - 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const morEve = date.getHours() < 12 ? 'am' : 'pm';

  document.querySelector('#date').textContent = `${dateTime}, ${hours}:${minutes}:${seconds} ${morEve}`;
}, 1000);

const myBookList = new BookList();
myBookList.setupEventListeners();

// month, date, year, time