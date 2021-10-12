const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let SchemaSettings = new Schema({
  lesson_imageUrl: String,
  lesson_title: String,
  lesson_description: String,
  lesson_category: String,
  lesson_date: String,
  creater_id: Number,
});

const Create = (lesson_imageUrl, lesson_title, lesson_description, lesson_category, lesson_date, creater_id) => {
  Lessons.create({
    lesson_imageUrl,
    lesson_title,
    lesson_description,
    lesson_category,
    lesson_date,
    creater_id,
  }, (err, result) => {
    if (err) throw err;
    console.log(`>> NEW LESSON: "${lesson_title}" ADDING TO DATABASE`);
  });
}


let Find = async (query) => {
  let data = await Lessons.find(query, (err, result) => {
    if (err) throw err;
    return {result};
  }).clone().catch(function (err) {
    console.log(err)
  })
  return {data}
}

let Lessons = mongoose.model('Lessons', SchemaSettings);

module.exports = {Lessons, Create, Find};
