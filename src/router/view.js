const express = require('express')
const {isAuth} = require('../middleware/auth')
const config = require('../config')
const router = express.Router()

// controll landing page
router.get('/me', isAuth, (req, res) => {
  console.log(req.userInfo)
  if (req.userInfo) {
    res.status(200).json({redirect: '/home'})
  } else {
    res.status(401).json({message: "user invalid", redirect: '/login'})
  }
})

// view login page
router.get('/login', (req, res) => {
  res.sendFile("login.html", {root: config.root.public})
})

// view signup page
router.get('/signup', (req, res) => {
  res.sendFile("signup.html", {root: config.root.public})
})

// view main page
router.get('/home', isAuth, (req, res) => {
  let userInfo = {
    email:'',
    username:''
  }
  if (req.userInfo) {
    userInfo = {...req.userInfo}
  }
  res.render("home", {userInfo})
})


module.exports = {viewRouter: router}