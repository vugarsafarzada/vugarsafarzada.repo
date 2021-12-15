const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let SchemaSettings = new Schema({
  content_title: String,
  url: String,
  content_data: Object,
  email: String,
  picture: String,
  descriptions: Array,
  programming_skills: Array,
});

const Create = (content_title, url, content_data, email, picture, descriptions, programming_skills) => {
  Content.create({
    content_title,
    url,
    content_data,
    email,
    picture,
    descriptions,
    programming_skills
  }, (err, result) => {
    if (err) throw err;
    console.log(`>> NEW CONTENT ADDED TO DATABASE`);
  });
}


let Data = async (query) => {
  let data = await Content.find(query, (err, result) => {
    if (err) throw err;
    return {result};
  }).clone().catch(function (err) {
    console.log(err)
  })
  return {data}
}

const Update = async (query, update) => {
  await Content.updateOne(query, update, (err, result) => {
    if (err) throw err;
    console.log(`>> UPDATED DATABASE`);
  });

}

const Update2 =  async (query, update) => {
  const opts = { new: true, upsert: true };
  await Content.findOneAndUpdate(query, {...update}, opts);
  console.log(`>> UPDATED DATABASE`);
}

let Content = mongoose.model('Content', SchemaSettings);

module.exports = {Content, Create, Data, Update2};
