class MenuVideo extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="menu-section-videos">
        <ul>
          <li><a href="/">Todo</a></li>
          <li><a href="/musicas">Músicas</a></li>
          <li><a href="/gamings">Gaming</a></li>
          <li><a href="#">Club Atletico Mineiro</a></li>
          <li><a href="#">Viver</a></li>
          <li><a href="#">Dublar</a></li>
          <li><a href="#">Reggae</a></li>
          <li><a href="#">Mistura</a></li>
          <li><a href="#">Forró</a></li>
          <li><a href="#">Televião ao vivo</a></li>
          <li><a href="#">Forró</a></li>
          <li><a href="#">Dança</a></li>
        </ul>
      </nav>
      `;
  }
}

customElements.define("menu-video", MenuVideo);
