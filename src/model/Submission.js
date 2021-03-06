const Mongoose = require('mongoose')
const Schema = Mongoose.Schema
const submissionSchema = new Mongoose.Schema({
  userId: {type: Schema.Types.ObjectId, ref: "User"},
  category: {
    type: String,
    required: true,
    enum: {
      values: ["soccer", "baseball", "basketball"],
      message: "{VALUE} is not supported"
    }
  },
  quizzes:[{
    quiz: {
      type: Schema.Types.ObjectId, 
      ref: "Quiz"
    }, 
    result: Boolean,
    selected: String,
  }],
  score: {
    type: String,
    required: true
  },
  start_time: {
    type: String,
    required: true
  },
  end_time: {
    type: String,
    required: true
  },
  submit_date: {
    type: String,
    required: true
  }
})

const Submission = Mongoose.model("Submission", submissionSchema)
module.exports = Submission
