const express = require("express");
const bodyParser = require("body-parser");
const database = require("./database.js");

const app = express();
const port = 3000;

// Using bodyParser we can parse the HTTP body of the request
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({
    info: "CRUD REST API using Nodejs, Express and PostgreSQL",
  });
});

app.listen(port, () => {
  console.log(`App started on port: ${port}`);
});

app.get("/users", database.getUsers);
