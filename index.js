import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";

import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import "./env";
import html from "html-literal";

const router = new Navigo(window.location.origin);

router.hooks({
  before: (done, params) => {
    axios
      .get(`https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET&v=YYYYMMDDS`)
      .then(response => {
        response.data.forEach(place => {
        state.Search.results.push(place);
        });
        done();
      });
  }
});

router
  .on({
    ":page": params => render(state[capitalize(params.page)]),
    "/": () => render(state.Home)
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

  router.hooks({
    before: (done, params) => {
      axios
        .get("https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=CLIENT_ID&client_secret=CLIENT_SECRET&v=YYYYMMDD
        ")
        // handle the response from the API
        .then(response => {
          // for each place in the response Array,
          response.data.forEach(place => {
            // add it to state.Search.results
            state.Search.results.push(place);
          });
          done();
        });
    }
  });


  // const request = require('request');

  // request(
  //   {
  //     url: 'https://api.foursquare.com/v2/venues/explore',
  //     method: 'GET',
  //     qs: {
  //       client_id: 'CLIENT_ID',
  //       client_secret: 'CLIENT_SECRET',
  //       ll: '40.7243,-74.0018',
  //       query: 'coffee',
  //       v: '20180323',
  //       limit: 1,
  //     },
  //   },
  //   function(err, res, body) {
  //     if (err) {
  //       console.error(err);
  //     } else {
  //       console.log(body);
  //     }
  //   }
  // );

// function addEventListeners(st) {
//   // add event listeners to Nav items for navigation
//   document.querySelectorAll("nav a").forEach(navLink =>
//     navLink.addEventListener("click", event => {
//       event.preventDefault(st);
//       render(state[event.target.title]);
//     })
//   );

//   // add menu toggle to bars icon in nav bar
//   document
//     .querySelector(".fa-bars")
//     .addEventListener("click", () =>
//       document.querySelector("nav > ul").classList.toggle("hidden--mobile")
//     );
// }

function addEventListeners(st) {
  function toggle() {
    let menu = document.getElementsByClassName(".hidden--mobile");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }

  document
    .getElementsByClassName("fa-bars")
    .addEventListeners("click", toggle());
}
