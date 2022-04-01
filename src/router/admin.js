const express = require('express')
const router = express.Router()

// view admin page
router.get('/', (req, res) => {
  
})

// view all user list or view quiz result for a specific user
router.get('/users/:userId', (req, res) => {
  
})

// view all submission list or view a submission history for a specific user 
router.get('/submission/:userId', (req, res) => {
  
})

// view all feedback list
router.get('/feedback', (req, res) => {
  
})

module.exports = {adminRouter: router}