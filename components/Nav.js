import html from "html-literal";

export default links => html`
  <nav>
    <i class="fas fa-bars"></i>
    <ul class="hiddenMobile navLinks">
      ${links.map(
        el =>
          `<li><a href="/${el.title}" title="${el.title}" data-navigo>${el.text}</a></li>`
      )}
    </ul>
  </nav>
`;
