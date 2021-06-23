import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

import html from "html-literal";

export default () => html`
  {
  <h1>Find AnyGym and get cracking</h1>
  <!-- input tag -->
  <input
    id="searchbar"
    type="text"
    name="search"
    placeholder="Name AnyGym here..."
  />

  <script>
    function subFun() {
      document.getElementById("submit").addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
          event.preventDefault();
          document.getElementById("submit").click();
        }
      });

      document.getElementById("submit").addEventListener("keyup", function(event) {
        console.log("searchQuery");
        }
      });

      let searchQuery = document.querySelector.("#searchbar").input.value.replaceAll(
      " ",
      "%20"
      );
    }
  </script>
  <script>
    function runRoute() {
      router.hooks({
        before: (done, params) => {
          axios
            .get(
              "https://api.mapbox.com/geocoding/v5/mapbox.places/gym.json?${window.searchQuery}&access_token=pk.eyJ1IjoiZHJvZDExMDciLCJhIjoiY2twdmphNXRpMWwwczJvcWM3dnhqdXY0biJ9._FH1da_3oQ2IHdJqxEE2XA"
            )
            // handle the response from the API
            .then(response => {
              response.data.forEach(place => {
                state.search.results.push(place);
              });
              done();
            });
        }
      });
    }
  </script>

  <button onclick="subFun()" onclick="runRoute()" id="submit" type="submit">
    Submit
  </button>

  <div>
    <h4>
      Check out these top notch gyms in your hood:
      <script>
        let results = [];
      </script>
    </h4>
  </div>
`;
