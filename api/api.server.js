const express = require('express');
const dotenv = require('dotenv');
let cors = require('cors');
const router = express.Router();
const auth_router = require('./router/auth_router')
const beats_router = require('./router/beats_router');
const icons_router = require('./router/icons_router');
const intro_router = require('./router/intro_router');
const content_router = require('./router/content_router');
const article_router = require('./router/article_router');
const image_uploader = require('./router/image_uploader')

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

app.use(express.json());
app.use(cors());
//INTRODUCE API
app.use("/api/introduce", intro_router)

//BEATS API
app.use("/api/beats/", beats_router);

//ICONS API
app.use("/api/icons", icons_router);

//CONTENT API
app.use("/api/content", content_router);

//ARTICLE API
app.use("/api/articles",article_router);

//AUTH API
app.use("/api/auth", auth_router);

//Upload Picture
app.use("/upload", image_uploader);

app.listen(port, () => {
  console.log(`>> API IN RUNNING ON http://${host}:${port}/api`)
})
