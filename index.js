import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";

import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

require("dotenv").config();

const router = new Navigo(window.location.origin);

let agKey = process.env.AG_KEY;
let geojson = [];

router.hooks({
  before: (done, params) => {
    axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/gym.json?bbox=-90.687836,38.392844,-90.009311,38.922696&access_token=${agKey}`
      )
      // .then(response => response.json())
      .then((response) => {
        geojson = response.data.features;
        console.log(state.Search.geojson);
        done();
      });
  },

  after: (params) => {
    mapboxgl.accessToken = agKey;
    var map = new mapboxgl.Map({
      container: "mapBox",
      style: "mapbox://styles/drod1107/ckpvjyyce3xtk18mnm3bnbblz",
      placeholder: "Search AnyGym near you",
      center: [-90.184776, 38.624691],
      zoom: 8,
    });

    // After the map style has loaded on the page,
    // add a source layer and default styling for a single point
    map.on("load", function() {
      map.addSource("apiQuery", {
        type: "geojson",
        // Use a URL for the value for the `data` property.
        data: `https://api.mapbox.com/geocoding/v5/mapbox.places/gym.json?bbox=-90.687836,38.392844,-90.009311,38.922696&access_token=${agKey}`,
      });

      map.addLayer({
        id: "point",
        type: "circle",
        source: "apiQuery",
        paint: {
          "circle-radius": 10,
          "circle-color": "#448ee4",
        },
      });
    });
    var geocoder = new MapboxGeocoder({
      // Initialize the geocoder
      accessToken: agKey, // Set the access token
      mapboxgl: mapboxgl, // Set the mapbox-gl instance
      marker: false, // Do not use the default marker style
      placeholder: "Search for AnyGym near you",
      bbox: [-90.687836, 38.392844, -90.009311, 38.922696], // Limit search to STL area
    });
    // Add the geocoder to the map
    map.addControl(geocoder);

    // // add markers to map
    // state.Search.geojson.features.forEach(function(marker) {
    //   // create a HTML element for each feature
    //   var el = document.createElement("div");
    //   el.className = "marker";

    //   // make a marker for each feature and add to the map

    //   new mapboxgl.Marker(el)
    //     .setLngLat(marker.geometry.coordinates)
    //     .setPopup(
    //       new mapboxgl.Popup({ offset: 25 }) // add popups
    //         .setHTML(
    //           "<h3>" +
    //             marker.properties.title +
    //             "</h3><p>" +
    //             marker.properties.description +
    //             "</p>"
    //         )
    //     )
    //     .addTo(map);
    // });
  },
});

router
  .on({
    ":page": (params) => render(state[capitalize(params.page)]),
    "/": () => render(state.Home),
  })
  .resolve();

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
  `;

  router.updatePageLinks();
  addEventListeners(st);
}

function addEventListeners(st) {
  // add event listeners to Nav items for navigation
  document.querySelectorAll("nav a").forEach((navLink) =>
    navLink.addEventListener("click", (event) => {
      event.preventDefault();
      render(state[event.target.title]);
    })
  );

  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden-mobile")
    );
}
