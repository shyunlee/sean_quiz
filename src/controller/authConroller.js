const authRepo = require('../data/auth')
const jwt = require('jsonwebtoken')
const config = require('../config')

const login = async (req, res) => {
  let user = req.body
  let arr = Object.values(user)
  let isAllFilled = arr.every(item => item)
  if (!isAllFilled) return res.status(400).json({message: "some values are missing"})
  let result = await authRepo.login(user)
  if (!result) return res.status(400).json({message: "some values are missing"})
  let data = {email: result.email, username: result.username, userId: result._id, level: result.level}
  const token = createToken(data)
  res.cookie('token', token)
  res.status(200).json({message: 'login succeeded', redirect:'/home'})
}

const signup = async (req, res) => {
  let user = req.body
  let arr = Object.values(user)
  let isAllFilled = arr.every(item => item)
  if (!isAllFilled) return res.status(400).json({message: "some values are missing"})
  try {
    let result = await authRepo.signup(user)
    let data = {email: result.email, username: result.username, userId: result._id, level: result.level}
    const token = createToken(data)
    res.cookie('token', token)
    res.status(200).json({message: 'login succeeded', redirect:'/home'}) 
  } catch (error) {
    return res.status(400).json({message: "some values are missing"})
  }
}

const logout = async (req, res) => {
  res.status(200).json({message: 'logout succeeded'})
}

// TODO: user validation
const me = async (req, res) => {
  let userInfo = req.userInfo
  if (userInfo) {
    res.status(200).json({data: userInfo})
  } else {
    res.status(400).json({message: 'user not valid'})
  }
}

const createToken = (user) => {
  return jwt.sign(user, config.jwt.secretKey, {expiresIn: config.jwt.expiredInSec})
}


module.exports = {login, signup, logout, me}