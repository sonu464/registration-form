const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, "../public");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(static_path));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/registration", function (req, res) {
  res.render("registration");
});

// Handle the POST request for registration
app.post("/registration", async function (req, res) {
  try {
    console.log("received data " + req.body.username);
    res.send(req.body.username);
  } catch (error) {
    res.status(400).send("Error occurred");
  }
});

app.listen(port, function () {
  console.log("Connected to the server. Listening on port " + port);
});
