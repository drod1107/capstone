import html from "html-literal";

export default st => html`
  <!-- Enter search bar and results grid stuff here -->

  <div class="wrap">
    <div class="search">
      <input type="text" class="searchTerm" placeholder="Find YOUR gym here:" />
      <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </div>

  <section id="results">
    ${st.places
      .map(place => {
        return formatSearchResults(place);
      })
      .join()}
  </section>
`;

// let searchString = document.querySelector("search.input") {
// console.log("keyup");
// };

function formatSearchResults(place) {
  return `
  <div class="searchResults">
    <h4>${place.title} by User ${place.userId}</h4>
    <p>${place.body}</p>
  </div>`;
}
