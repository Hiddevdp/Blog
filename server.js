const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, ".")));

app.get("/", (req, res) => {
  res.render("index", { body: "aboutMe" });
});

app.get("/vakken", (req, res) => {
  res.render("index", { body: "vakken" });
});

app.get("/weekly-nerds", (req, res) => {
  res.render("index", { body: "weeklyNerds" });
});

app.get("/meesterproef", (req, res) => {
  res.render("index", { body: "meesterproef" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
