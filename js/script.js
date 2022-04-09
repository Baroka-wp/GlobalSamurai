const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.nav-bar');
const main = document.querySelector('.main');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navbar.classList.toggle('active');
  main.classList.toggle('active');
})
