const Introduce = require('../introduce');
const express = require('express');
const intro_router = express.Router();
const dotenv = require('dotenv');
dotenv.config({path: "../../.env"});

intro_router.get("/", (req, res) => {
  Introduce.Data({__id: process.env.ADMIN})
    .then(function (result) {
      res.json(result)
    })
})

module.exports = intro_router;
