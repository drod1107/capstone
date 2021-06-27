import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
require("dotenv").config();

import html from "html-literal";

let agKey = process.env.AG_KEY;

export default () => html`
  <h1>Find AnyGym and get cracking</h1>

  <script>
      function runRoute() {
        const page =
          params && params.hasOwnProperty("page")
            ? capitalize(params.page)
            : "Home";
        switch (page) {
          case "Places":
            state.Search.results = [];
            axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/gym.json?bbox=-90.687836,38.392844,-90.009311,38.922696&access_token=${agKey}').then(response => {
                    response.data.forEach(place => {
                      console.log(place);
                    });
                    done();
            });
            break;
          default:
            done();
        }
      }
    });
  </script>
  <h4>
    Check out these top notch gyms in your hood:
  </h4>
  <div id="mapBox"></div>
  <script>
    mapboxgl.accessToken = agKey;

    var map = new mapboxgl.Map({
      container: "mapBox",
      style: "mapbox://styles/drod1107/ckpvjyyce3xtk18mnm3bnbblz",
      center: [-90.184776, 38.624691],
      zoom: 3
    });
    var geojson = {};
    // code from the next step will go here!
  </script>
`;
