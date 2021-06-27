import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";

import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "./env";
import html from "html-literal";

require("dotenv").config();

const router = new Navigo(window.location.origin);

let AnyGym_API_Key = process.env.AnyGym_API_Key;

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
