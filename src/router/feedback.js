const express = require('express')
const feedbackController = require('../controller/feedbackController')

const router = express.Router()

// view submit feedback page
router.get('/', (req, res) => {
  
})

// when user submit a feedback
router.post('/submit', feedbackController.submitFeedback)


module.exports = {feedbackRouter: router}