const form = document.querySelector("#book-form");

const books = [];



function addBook(event) {
    event.preventDefault();
    const title= event.target[0].value;
    const author= event.target[1].value;
    console.log(title,author)
}
form.addEventListener("submit",addBook);