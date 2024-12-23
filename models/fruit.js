// models/fruit.js

const mongoose = require('mongoose');


//create the schema
const fruitSchema = new mongoose.Schema({
  name: String,
  isReadyToEat: Boolean,
});

//register the model
const Fruit = mongoose.model("Fruit", fruitSchema); // create model

module.exports = Fruit;