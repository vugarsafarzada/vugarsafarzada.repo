const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let SchemaSettings = new Schema({
  title: String,
  content: String,
  date: String,
  picture: Array,
});

const Create = (
  title,
  content,
  date,
  picture
) => {
  Articles.create({
    title,
    content,
    date,
    picture
  }, (err, result) => {
    if (err) throw err;
    console.log(`>> DATA ADD TO DATABASE`);
  })
};

const Update = (id, update) => {
  Articles.findByIdAndUpdate(id, update, (err, result)=>{
    if(err) throw err;
    console.log(">> UPDATED DATABASE");
  })
}

const Data = async (query) => {
  let data = await Articles.find(query, (err, result)=>{
    if(err) throw err;
    return {result}
  }).clone().catch(function (err) {
    console.log(err)
  })
  return {data}
}

let Articles = mongoose.model('Articles', SchemaSettings);

module.exports = {Articles, Create, Update, Data}
