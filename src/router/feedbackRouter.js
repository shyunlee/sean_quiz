const express = require('express')
const feedbackController = require('../controller/feedbackController')
const config = require('../config')

const router = express.Router()

// view submit feedback page
router.get('/', (req, res) => {
  let userInfo = req.userInfo
  res.render("feedback", {userInfo})
})

// when user submit a feedback
router.post('/submit', feedbackController.submitFeedback)


module.exports = {feedbackRouter: router}