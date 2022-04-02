const Mongoose = require('mongoose')
const Schema = Mongoose.Schema
const feedbackSchema = new Mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    required:true,
    min: 0,
    max: 5
  },
  submitted_at: {
    type: String,
    required: true
  },
})

const Feedback = Mongoose.model("Feedback", feedbackSchema)
module.exports = Feedback