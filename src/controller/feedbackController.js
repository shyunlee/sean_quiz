const feedbackRepo = require('../data/feedback')

const submitFeedback = async (req, res) => {
  let feedback = req.body
  let data = await feedbackRepo.submitFeedback(feedback)
  res.status(200).json({message: "feedback submitted", data})
}

module.exports = {submitFeedback}