const jwt = require('jsonwebtoken')
const config = require('../config')

// user validataion and redirect to login page if invalid
const isAuth = async (req, res, next) => {
  let token = req.cookies['token']
  try {
    let userInfo =  jwt.verify(token, config.jwt.secretKey)
    req.userInfo = userInfo
    next()
  } catch (error) {
    next()
  }
}

const validation = async (req, res, next) => {
  let token = req.cookies['token']
  try {
    let userInfo =  jwt.verify(token, config.jwt.secretKey)
    req.userInfo = userInfo
    next()
  } catch (error) {
    res.status(401).json({message: "user not valid"})
  }
}

module.exports = {isAuth, validation}