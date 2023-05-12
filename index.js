const express = require("express");
const path = require("path");
const exthbs = require("express-handlebars");
const homeRouts = require("./routs/home");
const addRouts = require("./routs/add");
const coursesRouts = require("./routs/courses");

const app = express();
const hbs = exthbs.create({
  defaultlayout: "mail",
  extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}))
app.use('/', homeRouts);
app.use('/add', addRouts);
app.use('/courses',coursesRouts);

const PORT = process.env.PORT || 4000;
app.listen(PORT, function () {
  console.log(`Server was started on ${PORT}`);
});
