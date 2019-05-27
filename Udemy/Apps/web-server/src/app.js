const path = require("path");
const express = require("express");
const hbs = require("hbs");
//console.log(__dirname);
//console.log(path.join(__dirname, "../public"));
const app = express();

//Define paths for express consfig
const publicDirectoryPath = path.join(__dirname, "../public/");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//setup handlebars engine and views location
app.set("view engine", "hbs"); //setting handlebar tempelets for dynamic content
app.set("views", viewsPath); //when we change views folder name to templates
hbs.registerPartials(partialsPath);

//setup static directoy to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Zeeshan Haider"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Zeeshan Haider"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help page",
    msg: "If emergency, plz call 113/112",
    name: "Zeeshan Haider"
  });
});
app.get("/weather", (req, res) => {
  res.send([
    { forecast: "Sunny", location: "Florida" },
    { forecast: "Windy", location: "Texas" }
  ]);
});

app.get("/help/*", (req, res) => {
  //res.send("Help article Not found");
  res.render("404", {
    title: "404",
    name: "Zeeshan",
    errorMessage: "Page not found"
  });
});

app.get("*", (req, res) => {
  //res.send("404 page");
  res.render("404", {
    title: "404",
    name: "Zeeshan",
    errorMessage: "Page not found"
  });
});

app.listen(3000, () => {
  console.log("server on port 3000");
});
