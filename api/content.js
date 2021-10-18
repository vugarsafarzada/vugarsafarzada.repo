const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let SchemaSettings = new Schema({
  content_title: String,
  url: String,
  content_data: Object,
});

const Create = (content_title, url, content_data, ) => {
  Content.create({
    content_title,
    url,
    content_data
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

const Update = (content_id, update) => {
  Content.findByIdAndUpdate(content_id, update, (err, result) => {
    if (err) throw err;
    console.log(`>> UPDATED DATABASE`);
  });
}

let Content = mongoose.model('Content', SchemaSettings);

module.exports = {Content, Create, Data, Update};
