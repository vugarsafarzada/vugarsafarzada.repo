const express = require('express');
const dotenv = require('dotenv');

const {DataBase} = require('./model');
const Lesson = require('./lessons');
const Introduce = require('./introduce');

dotenv.config({path: "../.env"});
const port = process.env.API_PORT;
const host = process.env.HOST;
const URI = process.env.MONGO_URI;
const app = express();
/*
createLesson(
  "/url",
  "C#",
  "C# haqqında",
  "Proqramlawdirma",
  "11/10/21",
  100001,
)

Introduce.Data({})
  .then(function(result) {
    console.log(result)
  })

Introduce.Create("Salam men Vugar Safarzada", "picture2.jpg")

*/

app.use("/api/introduce", (req, res)=>{
  Introduce.Data({__id: process.env.ADMIN})
    .then(function (result) {
      res.json(result)
    })
})

app.use("/api/auth/:id", (req, res) => {
  switch (req.params.id) {
    case "admin":
      res.json(data);
      break;
    case "auth":
      res.json(data);
      break;
    default:
      res.send({message: "Error!"})
  }
});

app.use("/api/content/:id", (req, res) => {
  console.log(req.path)
  const page_query = req.path.split("/")[1]
  Lesson.Find({lesson_title: page_query}).then(function (result) {
    switch (req.params.id) {
      case "articles":
        res.json(result);
        break;
      case "lessons":
        res.json(result);
        break;
      case "main_menu":
        res.json(result);
        break;
      default:
        res.send({message: "Error!"})
    }

  });
});

app.listen(port, () => {
  console.log(`>> API IN RUNNING ON http://${host}:${port}/api`)
})
