const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// console.log(__dirname);

if (process.env.NODE_ENV === "produciton") {
  app.use(express.static(path.join(__dirname, "./build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./build"));
  });
}

app.listen(port, () => {
  console.log("Server is up!");
});
