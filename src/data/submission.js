const Submission = require('../model/Submission')
const config = require('../config')

// get all submission with quiz detail array
const getAllSubmissions = async () => {
  return Submission.find().populate({path: 'userId', select: {"password": 0, "__v": 0}}).populate({path:"quizzes", populate:{path:"quiz", select:{"__v": 0}}})
}

const submitTest = async (test) => {
  let now = new Date()
  let submit_date = now.toLocaleDateString('en-US', config.date.options)
  test = {...test, submit_date}
  let submission = new Submission(test)
  try {
    let savedId = await submission.save().then(res => res._id)
    // let result = await Submission.find({_id: savedId}).populate({path:"quizzes", populate:{path:"quiz", select:{"__v": 0}}})
    return savedId
  } catch (error) {
    return error
  }
}

const findSubmissionById = async (id) => {
  try {
    let result = await Submission.find({_id: id}).populate({path:"quizzes", populate:{path:"quiz", select:{"__v": 0}}})
    return result
  } catch (error) {
    return false
  }
}

module.exports = {getAllSubmissions, submitTest, findSubmissionById}