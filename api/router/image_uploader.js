const express = require('express');
const image_uploader = express.Router();
const multer  = require('multer')
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../static/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })

image_uploader.post('/:id', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  console.log(">> New photo uploaded!");
  console.log(req.params.id)
  res.end();
})

module.exports = image_uploader;
