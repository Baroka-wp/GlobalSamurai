//import speakerList
import speakerList from '../js/model/speakersList.js';
// get Html element
const speakersFeature = document.querySelector('.speakers-col')

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
};

for(const speaker in speakerList){
  addSpeaker(speakerList[speaker].image, speakerList[speaker].name, speakerList[speaker].graduate, speakerList[speaker].experience );
  //console.log(speakerList[speaker].name)
};
