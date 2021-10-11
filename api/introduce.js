const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let SchemaSettings = new Schema({
  description: String,
  description1: String,
  description2: String,
  picture: String,
});

const Create = (description, picture, description1, description2) =>
{
  Introduce.create({
    description,
    description1,
    description2,
    picture,
  }, (err, result) => {
    if (err) throw err;
    console.log(`>> INTRODUCE DATA ADD TO DATABASE`);
  });
}


let Data = async (query) => {
  let data = await Introduce.find(query, (err, result) => {
    if (err) throw err;
    return {result};
  }).clone().catch(function (err) {
    console.log(err)
  })
  return {data}
}

let Introduce = mongoose.model('Introduce', SchemaSettings);

module.exports = {Introduce, Data, Create};
