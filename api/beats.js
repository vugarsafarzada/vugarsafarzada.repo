const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let SchemaSettings = new Schema({
  title: String,
  beat_key: Number,
  date: String,
  description: String,
  path: String,
  albom_id: String,
  type: String,
});

const Create = (
  title,
  beat_key,
  date,
  description,
  path,
  albom_id,
  type,
) => {
  Beats.create({
    title,
    beat_key,
    date,
    description,
    path,
    albom_id,
    type,
  }, (err, result) => {
    if (err) throw err;
    console.log(`>>DATA ADD TO DATABASE`);
  });
}

const Update = (id, update) => {
  Beats.findByIdAndUpdate(id, update, (err, result) => {
    if (err) throw err;
    console.log(`>> UPDATED DATABASE`);
  });
}


let Data = async (query) => {
  let data = await Beats.find(query, (err, result) => {
    if (err) throw err;
    return {result};
  }).clone().catch(function (err) {
    console.log(err)
  })
  return {data}
}

let Beats = mongoose.model('Beats', SchemaSettings);

module.exports = {Beats, Data, Update, Create};
