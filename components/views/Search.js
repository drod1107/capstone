import html from "html-literal";

export default st => html`
  <!-- Enter search bar and results grid stuff here -->

  <section id="results">
    ${st.posts
      .map(place => {
        return formatSearchResults(place);
      })
      .join()}
  </section>
`;

function formatSearchResults(place) {
  return `
  <div class="searchResults">
    <h4>${place.title} by User ${place.userId}</h4>
    <p>${place.body}</p>
  </div>`;
}
