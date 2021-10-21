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
  Content.Data({url: req.params.id})
    .then(function (result) {
      res.json(result);
    });
})

module.exports = content_router;
