const express = require('express');
const dotenv = require('dotenv');

const router = express.Router();
const auth_router = require('./router/auth_router')
const beats_router = require('./router/beats_router');
const icons_router = require('./router/icons_router');
const intro_router = require('./router/intro_router');
const content_router = require('./router/content_router');
const article_router = require('./router/article_router');

const { DataBase } = require('./model');
const Lesson = require('./lessons');
const Introduce = require('./introduce');
const Beats = require('./beats');
const Articles = require('./articles');

dotenv.config({path: "../.env"});
const port = process.env.API_PORT;
const host = process.env.HOST;
const URI = process.env.MONGO_URI;
const app = express();

//INTRODUCE API
app.use("/api/introduce", intro_router)

//BEATS API
app.use("/api/beats/", beats_router);

//ICONS API
app.use("/api/icons", icons_router);

//CONTENT API
app.use("/api/content", content_router);

//ARTICLE API
app.use("/api/articles", article_router);

//AUTH API
app.use("/api/auth", auth_router);


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

*/

/*Introduce.Update({
  experience: [
    {
      company_name: "Positive MMC",
      company_url: "https://positive.com.az/",
      title: "Front-End Developer",
      date: new Date(2021, 8, 16),
      location: "Baku, Azerbaijan",
      project: [
        {
          name: "Development of Note.az",
          date: new Date(2021, 8, 16),
          description: ""
        }
      ]
    },
  ]
})*/
