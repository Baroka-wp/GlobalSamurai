// import speakerList
import speakerList from './model/speakersList.js';
// get Html element
const speakersFeature = document.querySelector('.speakers-col');

// function to add speaker
const addSpeaker = async (image, name, graduate, experience) => {
  const el = document.createElement('v-card');
  el.classList.add('vCard');
  el.speakerName = name;
  el.speakerGraduate = graduate;
  el.speakerExperience = experience;
  // get async image
  el.speakerImage = await (() => {
    const img = image;
    return img;
  })();
  // append speaker list to speakersFeature Div
  speakersFeature.append(el);
};
// eslint-disable-next-line   no-restricted-syntax
for (const speaker of [...Object.keys(speakerList)]) {
  addSpeaker(
    speakerList[speaker].image,
    speakerList[speaker].name,
    speakerList[speaker].graduate,
    speakerList[speaker].experience,
  );
}
