// Here is where we import modules
// We begin by loading Express
require('dotenv').config();
require('./Config/database')
const express = require('express');
const morgan = require('morgan');

const app = express();

//Models
const Fruit = require("./models/fruit.js");




// MIDDLEWARE
app.use(morgan('dev'));

// GET /

  app.get("/", async (req, res) => {
    res.render("index.ejs");
  });
  
  app.get("/fruits/new", (req, res) => {
    res.render("fruits/new.ejs");
  });

// ROUTES

app.listen(3000, () => {
  console.log('Listening on port 3000');
});











