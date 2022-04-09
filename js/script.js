import Header from '../js/components/header.js';
import Footer from '../js/components/footer.js';


customElements.define("v-header", Header);
customElements.define("v-footer", Footer);

const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.nav-bar');
const main = document.querySelector('.main');
const navLink = document.querySelectorAll('.nav-link');


hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navbar.classList.toggle('active');
  main.classList.toggle('active');
})

navLink.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navbar.classList.remove('active');
    main.classList.remove('active');
  })
});
