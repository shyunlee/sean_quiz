const authRepo = require('../data/auth')
const submissionRepo = require('../data/submission')
const feedbackRepo = require('../data/feedback')


const getAllUsers = async (req, res) => {
  try {
    let data = await authRepo.getAllUsers()
    res.status(200).json({data})
  } catch (error) {
    res.status(400).json({message: "something wrong"})
  }
}

// TODO: get all quiz result by user - using submission
const getResultByUser = async (req, res) => {
  let userId = req.params.userId
  console.log(userId)
  res.sendStatus(200)
}

const getAllSubmissions = async (req, res) => {
  try {
    let data = await submissionRepo.getAllSubmissions()
    res.status(200).json({data})
  } catch (error) {
    res.status(400).json({message: "something wrong"})
  }
}

const getAllFeedbacks = async (req, res) => {
  try {
    let data = await feedbackRepo.getAllFeedBacks()
    res.status(200).json({data})
  } catch (error) {
    res.status(400).json({message: "something wrong"})
  }
}

module.exports = {getAllUsers, getAllSubmissions, getAllFeedbacks, getResultByUser}
