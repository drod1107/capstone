import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";

import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "./env";
import html from "html-literal";

require("dotenv").config();

const router = new Navigo(window.location.origin);

var curDate = function(sp) {
  let today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //As January is 0.
  var yyyy = today.getFullYear();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  return mm + sp + dd + sp + yyyy;
};
console.log(curDate(""));

let clientID = process.env.clientID;
let clientSecret = process.env.clientSecret;

// router.hooks({
//   before: (done, params) => {
//     axios
//       .get(
//         `https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=${clientID}&client_secret=${clientSecret}&v=${curDate}`
//       )
//       // handle the response from the API
//       .then(response => {
//         // for each post in the response Array,
//         response.data.forEach(place => {
//           // add it to state.Blog.posts
//           state.Search.results.push(place);
//         });
//         done();
//       });
//   }
// });

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

  function addEventListeners(st) {
    // add event listeners to Nav items for navigation
    document.querySelectorAll("nav a").forEach(navLink =>
      navLink.addEventListener("click", event => {
        event.preventDefault();
        render(state[event.target.title]);
      })
    );

    addEventListeners(st);
  }

  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden-mobile")
    );
}
