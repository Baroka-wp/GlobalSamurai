export default class Modal extends HTMLElement {
  constructor() {
    super();
    this.modal = '';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="modalWindow">
          <i class="fa-solid fa-xmark"></i>
          <div class="modalHero">
            <p>"Hello! Sharing world"</p>
            <h2>CREATIVE COMMONS <br> GLOBAL SUMMIT</h2>
            <h3>2015.10.15(THU) ~ 1(FRI)</h3>
            <p> @ National Museum of Korea, Art Center Nabi and more</p>
          </div>
          <form action="https://formspree.io/f/xeqnzdea" method="POST" id="ContactForm">
            <div class="form-input">
              <div class="field field-name">
                  <!--<label for="name">Your name</label>-->
                <input type="text" name="name" id="name" placeholder="Your name"  maxlength="10" required>
              </div>
              <div class="field field-email">
                  <!--<label for="email"> Your email</label>-->
                <input type="email" name="email" id="email" placeholder="Your email" required>
              </div>
            </div>
            <div class="field fiel-maessage">
              <!--<label for="message">Message</label>-->
              <textarea name="message" id="message" placeholder="Enter your message here..." maxlength="500" required></textarea>
            </div>
            <small></small>
            <button type="submit">Start collaboration</button>
          </form>
        </div>
    `;
  }
}
