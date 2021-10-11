const dotenv = require('dotenv')
dotenv.config({path: "../.env"});
const mongoose = require('mongoose');

const URI = process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME

const db = mongoose.connect(URI, {}, (err) => {
  if (err) throw err;
  console.log('>> Connection is succesfull by DataBase'.toUpperCase());
});

module.exports = {DataBase: db}
