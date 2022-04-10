//import components
import Header from '../js/components/header.js';
import Footer from '../js/components/footer.js';
import Vcard from '../js/components/speakerFeature.js';
import Modal from '../js/components/modal.js';

//define custom elements
customElements.define("v-header", Header);
customElements.define("v-footer", Footer);
customElements.define("v-card", Vcard);
customElements.define("v-modal", Modal);

// get Html elements
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.nav-bar');
const main = document.querySelector('.main');
const navLink = document.querySelectorAll('.nav-link');
const modalWindow = document.querySelector('.modalWindow');
const callAction = document.querySelector('.call-action');

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

document.addEventListener('click', (event) => {
  if (event.target.matches('.call-action')) {
    modalWindow.classList.add('active');
    main.classList.add('active');
  } else if (
    event.target.matches('.fa-xmark')
  ){
    closeModal();
  } else if (
    ! hamburger.classList.contains('active') &&
    modalWindow.classList.contains('active') &&
    ! event.target.closest('.modalWindow')
  ) {
    closeModal();
  }
})

const closeModal = () => {
  modalWindow.classList.remove('active')
  main.classList.remove('active');
}
