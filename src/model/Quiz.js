const Mongoose = require('mongoose')
const Schema = Mongoose.Schema
const quizSchema = new Mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: {
     values: ["soccer", "baseball", "basketball"],
     message: "{VALUE} is not supported" 
    }
  }
})
const Quiz = Mongoose.model("Quiz", quizSchema)
module.exports = Quiz
