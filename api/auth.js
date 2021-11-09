const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let SchemaSettings = new Schema({
  email: String,
  password: String,
});

let Data = async (query) => {
  let data = await Auth.find(query, (err, result) => {
    if (err) throw err;
    return {result};
  }).clone().catch(function (err) {
    console.log(err)
  })
  return {data}
}

let Auth = mongoose.model('Auth', SchemaSettings);

module.exports = {Data}
