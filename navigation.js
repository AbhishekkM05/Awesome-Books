const sections = document.querySelectorAll('section');
const bookListSection = document.querySelector('#book-list-section');
const navBtns = document.querySelectorAll('.nav-btn');

function renderPage(e) {
  sections.forEach((section) => {
    section.style.display = 'none';
  });
  navBtns.forEach((btn) => {
    btn.classList.remove('btn-active');
  });
  const btn = e.target;
  const idOfClicked = btn.getAttribute('data-id');
  const section = document.querySelector(`#${idOfClicked}`);
  section.style.display = 'flex';
  btn.classList.toggle('btn-active');
}

navBtns.forEach((each) => {
  each.addEventListener('click', renderPage);
});

window.onload = () => {
  bookListSection.style.display = 'flex';
  Array.from(navBtns)[0].className = 'btn-active';
};