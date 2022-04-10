//import components
import Header from '../js/components/header.js';
import Footer from '../js/components/footer.js';
import Vcard from '../js/components/speakerFeature.js';
//import speakerList
import speakerList from '../js/model/speakersList.js';

//define custom elements
customElements.define("v-header", Header);
customElements.define("v-footer", Footer);
customElements.define("v-card", Vcard);

const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.nav-bar');
const main = document.querySelector('.main');
const navLink = document.querySelectorAll('.nav-link');
const speakersFeature = document.querySelector('.speakers-col')

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

// function to add speaker
const addSpeaker = async (image, name, graduate, experience) =>{
  let el = document.createElement("v-card");
  el.speakerName = name;
  el.speakerGraduate = graduate;
  el.speakerExperience = experience;
  //get async image
  el.speakerImage = await (() => {
    var img = image;
    return img
  })();
  //append speaker list to speakersFeature Div
  speakersFeature.append(el);
}

for(const speaker in speakerList){
  addSpeaker(speakerList[speaker].image, speakerList[speaker].name, speakerList[speaker].graduate, speakerList[speaker].experience );
  //console.log(speakerList[speaker].name)
};
