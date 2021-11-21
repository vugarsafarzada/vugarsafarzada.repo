const express = require('express');
const Content = require("../content");
const content_router = express.Router();

content_router.post("/update", (req, res) => {
  Content.Update("6169e29d088bc5ba471c1d8d", {
    content_title: "Main Page",
    url: "/main",
    content_data: {
      carousel: false,
    }
  })
  res.json({message: "successful"})
})

content_router.get("/:id", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  Content.Data({url: req.params.id})
    .then(function (result) {
      res.json(result);
    });
})

module.exports = content_router;
