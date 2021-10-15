const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let SchemaSettings = new Schema({
  description: String,
  description1: String,
  description2: String,
  picture: String,
  programming_skills: Object,
  eduction_skills: Object,
  experience: Object,
  phone: Array,
  social: Object,
  email: String,
  resume: String,
});

const Create = (
  description,
  picture,
  description1,
  description2,
  programming_skills,
  eduction_skills,
  experience,
  phone,
  email,
  social,
  resume,
) => {
  Introduce.create({
    description,
    description1,
    description2,
    picture,
    programming_skills,
    eduction_skills,
    experience,
    phone,
    email,
    social,
    resume,
  }, (err, result) => {
    if (err) throw err;
    console.log(`>> INTRODUCE DATA ADD TO DATABASE`);
  });
}

const Update = (update) =>
{
  Introduce.findByIdAndUpdate(process.env.ADMIN, update, (err, result) => {
    if (err) throw err;
    console.log(`>> UPDATED DATABASE`);
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

module.exports = {Introduce, Data, Update, Create};
