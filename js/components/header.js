export default class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
      <header>
        <div class="top-nav">
          <ul>
            <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
            <li><a href="#">English</a></li>
            <li><a href="#">My Page</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </div>
        <div class="hamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <nav class="nav-bar">
          <div class="logo-text">
            <p><a href="index.html">Global</a></p>
            <em><a href="index.html">Samurai</a></em>
          </div>
          <ul class="nav-list">
            <li class="nav-link"><a href="about.html">About</a></li>
            <li class="nav-link"><a href="#">Program</a></li>
            <li class="nav-link"><a href="#">Join</a></li>
            <li class="nav-link"><a href="#">Sponsor</a></li>
            <li class="nav-link"><a href="#">News</a></li>
            <li class="nav-link"><a href="#" class="call-action" href="#">CC Compaign</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}
