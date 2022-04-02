const express = require('express')
const {isAuth} = require('../middleware/auth')

const router = express.Router()

// controll landing page
router.get('/', isAuth, (req, res) => {
  
})

// view login page
router.get('/login', (req, res) => {
  
})

// view signup page
router.get('/signup', (req, res) => {
  
})

// view main page
router.get('/home', (req, res) => {
  
})


module.exports = {viewRouter: router}