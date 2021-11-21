const Auth = require('../auth');
const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const auth_router = express.Router();
dotenv.config({path: "../../.env"});

auth_router.get("/:email/:password/check", async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  Auth.Data({email: req.params.email, password: req.params.password})
    .then(function (result) {
      res.json(result);
    });
})

auth_router.get("/:id/userId", async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  Auth.Data({_id: req.params.id})
    .then(function (result) {
      const token = jwt.sign({ user_id: req.params.id }, process.env.ADMIN);
      res.json({token: token});
    });
})

module.exports = auth_router;
