const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  }
});

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;
