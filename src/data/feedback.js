const Feedback = require('../model/Feedback')
const config = require('../config')

const submitFeedback = async (feedback) => {
  let now = new Date()
  let submitted_at = now.toLocaleDateString('en-US', config.date.options)
  feedback = {...feedback, submitted_at }
  newFeedback = new Feedback(feedback)
  return await newFeedback.save().then(res => res)
}


module.exports = {submitFeedback}