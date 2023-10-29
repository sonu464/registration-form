const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/collegeData")
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log("No Connection");
  });
