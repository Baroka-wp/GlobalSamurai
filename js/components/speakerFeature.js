export default class Vcard extends HTMLElement {
  constructor() {
    super();

    this.speakerImage = "";
    this.speakerName = "";
    this.speakerGraduate = "";
    this.speakerExperience = "";
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <div class="speaker">
      <div class="speaker-img-block">
        <img class="speaker-img" src="${this.speakerImage}" alt="speaker image">
      </div>
      <div class="speaker-details">
        <h4>${this.speakerName}</h4>
        <em>${this.speakerGraduate}</em>
        <div class="speaker-separation"></div>
        <p>${this.speakerExperience}</p>
      </div>
    </div>
    `;
  }
}
