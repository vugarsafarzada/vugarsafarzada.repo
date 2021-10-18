const Beats = require('../beats');
const express = require('express');
const beats_router = express.Router();

beats_router.get("/:albom_id/:beat_key", (req, res) => {
  Beats.Data({albom_id: req.params.albom_id, beat_key: req.params.beat_key})
    .then(function (result) {
      res.json(result);
    });
});

beats_router.get("/:albom_id/", (req, res) => {
  Beats.Data({albom_id: req.params.albom_id})
    .then(function (result) {
      res.json(result);
    });
});

module.exports = beats_router;
