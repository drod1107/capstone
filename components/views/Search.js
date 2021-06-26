import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

import html from "html-literal";

function subFun() {
  let searchQuery = document.getElementById.searchbar.input.value.replaceAll(
    " ",
    "%20"
  );
}

// function subFun() {
//   let searchQuery = document.querySelector.("#searchbar").input.value.replaceAll(
//   " ",
//   "%20"
//   );

export default () => html`
  {
  <head>
    <meta charset="utf-8" />
    <title>Add a geocoder</title>
    <meta
      name="viewport"
      content="initial-scale=1,maximum-scale=1,user-scalable=no"
    />
    <link
      href="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css"
      rel="stylesheet"
    />
    <script src="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js"></script>
    <style>
      body {
        margin: 0;
        padding: 0;
      }
      #map {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
      }
    </style>
  </head>
  <body>
    <!-- Load the mapbox-gl-geocoder plugin. -->
    <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.0/mapbox-gl-geocoder.min.js"></script>
    <link
      rel="stylesheet"
      href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.0/mapbox-gl-geocoder.css"
      type="text/css"
    />

    <!-- Promise polyfill script is required -->
    <!-- to use Mapbox GL Geocoder in IE 11. -->
    <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script>

    <div id="map"></div>

    <script>
      mapboxgl.accessToken =
        "pk.eyJ1IjoiZHJvZDExMDciLCJhIjoiY2twdmphNXRpMWwwczJvcWM3dnhqdXY0biJ9._FH1da_3oQ2IHdJqxEE2XA";
      var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [38.6247, 90.1848],
        zoom: 13
      });

      // Add the control to the map.
      map.addControl(
        new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl: mapboxgl
        })
      );
    </script>

    <h1>Find AnyGym and get cracking</h1>
    <!-- input tag -->
    <input
      id="searchbar"
      type="text"
      name="search"
      placeholder="Name AnyGym here..."
    />

    <script>
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
  </body>
`;
