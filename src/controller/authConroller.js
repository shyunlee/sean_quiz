const authRepo = require('../data/auth')
const jwt = require('jsonwebtoken')
const config = require('../config')

const login = async (req, res) => {
  let user = req.body
  let arr = Object.values(user)
  let isAllFilled = arr.every(item => item)
  if (!isAllFilled) return res.status(400).json({message: "some values are missing"})
  let result = await authRepo.login(user)
  let data = {email: result.email, username: result.username, userId: result._id}
  const token = createToken(data)
  res.cookie('token', token)
  res.status(200).json({message: 'login succeeded', data})
}

const signup = async (req, res) => {
  let user = req.body
  let arr = Object.values(user)
  let isAllFilled = arr.every(item => item)
  if (!isAllFilled) return res.status(400).json({message: "some values are missing"})
  let result = await authRepo.signup(user)
  let data = {email: result.email, username: result.username, userId: result._id}
  const token = createToken(data)
  res.cookie('token', token)
  res.status(200).json({message: 'signup succeeded', data}) 
}

const logout = async (req, res) => {
  res.status(200).json({message: 'logout succeeded'})
}

// TODO: user validation
const me = async (req, res) => {

}

const createToken = (user) => {
  return jwt.sign(user, config.jwt.secretKey, {expiresIn: config.jwt.expiredInSec})
}


module.exports = {login, signup, logout, me}