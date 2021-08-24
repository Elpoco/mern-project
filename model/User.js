const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  data: Object,
});

module.exports = mongoose.model('User', userSchema);