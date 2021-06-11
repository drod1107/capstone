require("dotenv").config();
const mongoose = require(`mongoose`);
const express = require("express");

const dbConnect = process.env.DB_CONNECT || "mongodb://localhost";
mongoose.connect(dbConnect);
const app = express();
const db = mongoose.connection;

// db.on(`error`, console.error.bind(console, `connection error`));
// db.once(
//   "open",
//   console.log.bind(console, "Successfully opened connection to Mongo!")
// );

app.route("/").get((request, response) => {
  response.status(200).json({ message: "HELLO WORLD" });
});

// const bodyParser = require("body-parser"); // with the rest of your imports

// app.use(bodyParser.json());

// app.route("/**").get((request, response) => {
//   response.status(404).send("NOT FOUND");
// });

//This line is always last
const PORT = process.env.PORT || 4040;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
