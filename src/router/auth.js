const express = require('express')
const authController = require('../controller/authConroller')


const router = express.Router()

// when user login
router.post('/login', authController.login)

// when user signup
router.post('/signup', authController.signup)

// when user logout
// TODO: insert middleware
router.get('/logout', authController.logout)

router.get('/me', authController.me)


module.exports = {authRouter: router}