const Auth = require('../auth');
const express = require('express');
const auth_router = express.Router();

auth_router.get("/", async (req, res) => {
  Auth.Data({})
    .then(function (result) {
      res.json(result);
    });
})

module.exports = auth_router;
