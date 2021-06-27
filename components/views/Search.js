import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

import html from "html-literal";

export default () => html`
  {

  <h1>Find AnyGym and get cracking</h1>

  <script>
    function runRoute() {
      router.hooks({
        before: (done, params) => {
          axios
            .get(
              "https://api.mapbox.com/geocoding/v5/mapbox.places/gym.json?bbox=-90.687836,38.392844,-90.009311,38.922696&access_token=pk.eyJ1IjoiZHJvZDExMDciLCJhIjoiY2txZTR0cHk3MDV2OTJubnpmdDRoMGxyZyJ9.hIyue0w4CuKIARjWNzu5ew"
            )
            .then(response => {
                response.data.forEach(place => {
                  state.search.geojson.push(place);
                });
                done();
              });
      });
    }
  </script>
  <h4>
    Check out these top notch gyms in your hood:
  </h4>
  <div id="mapBox"></div>
  <script>
    mapboxgl.accessToken = "YOUR_MAPBOX_ACCESS_TOKEN";

    var map = new mapboxgl.Map({
      container: "mapBox",
      style: "mapbox://styles/mapbox/light-v10",
      center: [-90.184776, 38.624691],
      zoom: 3
    });
    var geojson = {};
    // code from the next step will go here!
  </script>
`;
