
// Setting up an app using EXPRESS
const express = require("express");
const app = express();
const host = "127.0.0.1";
const port = 80;
// Other Modules
const mongoose = require("mongoose");
const path = require("path");
const { title } = require("process");

// EXPRESS  related Stuff
app.use("/static", express.static("static"));
app.use(express.urlencoded());

app.set("views", path.join(__dirname  , "views"));
app.set("view engine", "pug");

// END POINTS of my App
app.get("/", (req, res) => {
  res.status(200).render("home.pug");
});

app.get("/home", (req, res) => {
  res.status(200).render("home.pug");
});

app.get("/about", (req, res) => {
  res.render("about.pug");
});

app.get("/feedback", (req, res) => {
  res.status(200).render("feedback.pug");
});

app.get("/service", (req, res) => {
  res.status(200).render("service.pug");
});
app.get('/place-order', (req, res )=>{
  res.status(200).render('order.pug')
})


// Setting up connection with mongodb
const URI = "mongodb://localhost:27017/It_Hub";
mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected with MongoDB successfuly");
  })
  .catch((err) => {
    console.error(err);
  });
  
const Schema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  region: String,
  concern: String,
});

const User = mongoose.model("contact", Schema);

app.post("/feedback", (req, res) => {
  let data = new User(req.body);
  
  data.save(); 
  res.render("feedback.pug");
}); 

app.post("/place-order", (req,res) =>{
  res.render("order.pug") 
})

app.get('/place-order', (req, res )=>{
  res.status(200).render('order.pug')
})

// Listining app on specified Port
app.listen(port, () => {
  console.log(
    `Your app is started at http://${host}:${port}. Just click it to see your app on browser !!!`
  );
});
