//Write missing codes here
const mongoose = require('mongoose');
const schema = mongoose.Schema({
  title: String,
  content: String,
  blogid : String,
  img_url: String,
});
module.exports = mongoose.model('Model', schema);
//Write missing codes here
