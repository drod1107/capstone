import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

import html from "html-literal";

export default () => html`
  {


    <h1>Find AnyGym and get cracking</h1>

    <script>
      let results = [];
      function showResults () {
        console.log results{};
      }
      }
      function runRoute() {
        router.hooks({
          before: (done, params) => {
            axios
              .get(
                "https://api.mapbox.com/geocoding/v5/mapbox.places/gyms.json?Saint%20Louis&access_token=pk.eyJ1IjoiZHJvZDExMDciLCJhIjoiY2twdmphNXRpMWwwczJvcWM3dnhqdXY0biJ9._FH1da_3oQ2IHdJqxEE2XA"
              )
              // handle the response from the API
              <!-- .then(response => {
                console.log(response.data) {

                };
                });
                done();
              }); -->
          }
        });
      }
    </script>
      <h4>
        Check out these top notch gyms in your hood:
      </h4>
        <iframe
          src='https://api.mapbox.com/styles/v1/mapbox/streets-v11.html?title=true&zoomwheel=true&access_token=pk.eyJ1IjoiZHJvZDExMDciLCJhIjoiY2twdmphNXRpMWwwczJvcWM3dnhqdXY0biJ9._FH1da_3oQ2IHdJqxEE2XA#15/38.624691/-90.184776' width='100%' height='400px' title='Mapbox Styles embed'>
        </iframe>
      </div>
      <script>
      map.on('load', function () {
        map.addSource('gyms', {
          "geojson-lines": {
          "type": "geojson",
          "data": "results"
      }
;

        map.addLayer({
        'id': 'gyms-layer',
        'type': 'circle',
        'source': 'gyms',
        'paint': {
        'circle-radius': 2,
        'circle-stroke-width': 1,
        'circle-color': 'gold',
        'circle-stroke-color': 'purple'
        }
        });
      });
      </script>
  </body>
`;
