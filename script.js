const form = document.querySelector('#book-form');
const bookListContainer = document.querySelector('#book-list');
const books = [];

// create a book obj
function BookObj(title, author) {
    this.title = title;
    this.author = author;
}

// add a book to books array
function addBook(event) {
    event.preventDefault();
    const title= event.target[0].value;
    const author= event.target[1].value;
    const newBook = new BookObj(title, author);
    books.push(newBook);
    displayBooks(newBook, books.length - 1);
}

// delete a book
function removeBook(index) {
    books.splice(index, 1);
    bookListContainer.innerHTML = '';
    books.forEach((book, index) => {
        displayBooks(book, index)
    });
}

// display books
function displayBooks({
    title, author,
}, index) {
    const li = document.createElement('li');
    li.textContent = `${title} by ${author} `;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {removeBook(index)});
    li.appendChild(removeBtn);
    bookListContainer.appendChild(li);
}

form.addEventListener('submit',addBook);