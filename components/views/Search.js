import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
require("dotenv").config();

import html from "html-literal";

let agKey = process.env.AG_KEY;

export default (st) => html`
  <h1>Find AnyGym and get cracking</h1>
  <div class="wrap">
   <div class="search">
      <input type="text" class="searchTerm" placeholder="What are you looking for?">
      <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
     </button>
   </div>
</div>
  <pre><code>${st.geojson}</code></pre>
  <h4>
    Check out these top notch gyms in your hood:
  </h4>
  <div id="mapBox"></div>
`;
