export default class Footer extends HTMLElement {
  constructor() {
    super();
    this.footer = '';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
        <div class="footer-content">
          <div class="footer-credit">
            <h2>GS</h2>
            <h3>Global <br> Samurai</h3>
          </div>
          <div class="copyrigth">
            <h4>2022 Africa Samurai LLC. Some Rights Reserved.</h4>
            <br>
            <p>
              このサイトでは、SAMURAI School of Engineeringの活動をご紹介しています。ウェブサイトでは、会社の活動内容やアクター、目的などを簡潔に紹介しています。
              <a href="https://africasamurai.com/">https://africasamurai.com/</a>
            </p>
          </div>
        </div>
      </footer>
    `;
  }
}
