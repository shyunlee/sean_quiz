const express = require('express')
const adminController = require('../controller/adminController')

const router = express.Router()

// view all user list or view quiz result
router.get('/users', adminController.getAllUsers)

// view quizzes that user took
router.get('/users/:userId', adminController.getResultByUser)

// view all submission list 
router.get('/submission', adminController.getAllSubmissions)

// view submissions by a specific user
router.get('/submission/:userId', adminController.getSubmissionByUser)

// get submission count by user
router.get('/submission/count/:userId', adminController.countSubmissionByUser)

// view all feedback list
router.get('/feedback', adminController.getAllFeedbacks)

// view admin page
router.get('/', (req, res) => {
  
})
module.exports = {adminRouter: router}