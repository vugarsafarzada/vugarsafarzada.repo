const Introduce = require('../introduce');
const express = require('express');
const intro_router = express.Router();
const dotenv = require('dotenv');
dotenv.config({path: "../../.env"});

intro_router.get("/", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  Introduce.Data({__id: process.env.ADMIN})
    .then(function (result) {
      res.json(result)
    })
})

module.exports = intro_router;
