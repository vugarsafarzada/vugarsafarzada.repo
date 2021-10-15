const express = require('express');
const icons_router = express.Router();
const icons = require('../icons.json');

icons_router.get("/", (req, res) => {
  res.json(icons);
})

module.exports = icons_router;

