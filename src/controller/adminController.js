const authRepo = require('../data/auth')
const submissionRepo = require('../data/submission')
const feedbackRepo = require('../data/feedback')


const getAllUsers = async (req, res) => {
  try {
    let userInfo = req.userInfo
    console.log(userInfo)
    let data = await authRepo.getAllUsers()
    res.render('userList', {userInfo, data})
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
    let userInfo = req.userInfo
    let data = await submissionRepo.getAllSubmissions()
    res.render('submitList', {userInfo, data})
  } catch (error) {
    res.status(400).json({message: "something wrong"})
  }
}

const getSubmissionByUser = async (req, res) => {
  try {
    let userId = req.params.userId
    let userInfo = req.userInfo
    let data = await submissionRepo.getSubmissionByUser(userId)
    console.log("result" , data)
    res.render('submitList', {userInfo, data})
  } catch(error) {
    res.status(400).json({message: "find submit by user wrong"})
  }
}

const countSubmissionByUser = async (req, res) => {
  let userId = req.params.userId
  try{
    let count = await submissionRepo.countSubmitByUser(userId)
    res.status(200).json({count})
  } catch (error) {
    res.status(400).json({message: "something wrong"})
  }
}

const getAllFeedbacks = async (req, res) => {
  try {
    userInfo = req.userInfo
    let data = await feedbackRepo.getAllFeedBacks()
    res.render('feedbackList', {userInfo, data})
  } catch (error) {
    res.status(400).json({message: "something wrong"})
  }
}

module.exports = {getAllUsers, getAllSubmissions, getAllFeedbacks, getResultByUser, getSubmissionByUser, countSubmissionByUser}
