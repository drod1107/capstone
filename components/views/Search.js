import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
require("dotenv").config();

import html from "html-literal";

let agKey = process.env.AG_KEY;

export default (st) => html`
  <h1>Find AnyGym and get cracking</h1>
  <pre><code>${st.geojson}</code></pre>
  <h4>
    Check out these top notch gyms in your hood:
  </h4>
  <div id="mapBox"></div>
`;
