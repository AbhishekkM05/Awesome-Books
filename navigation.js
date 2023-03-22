const sections = document.querySelectorAll('section');
const bookListSection = document.querySelector('#book-list-section');
const navBtns = document.querySelectorAll('.nav-btn a');

function renderPage(e) {
  sections.forEach((section) => {
    section.style.display = 'none';
  });
  const btn = e.target;
  const idOfClicked = btn.getAttribute('data-id');
  const section = document.querySelector(`#${idOfClicked}`);
  section.style.display = 'flex';
}

navBtns.forEach((each) => {
  each.addEventListener('click', renderPage);
});

window.onload = () => {
  bookListSection.style.display = 'flex';
};