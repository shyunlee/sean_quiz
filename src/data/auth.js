const User = require('../model/User')
const bcrypt = require('bcrypt')


const signup = async (user) => {
  let isExsist = await User.findOne({email: user.email})
  if (isExsist) return false
  let hashed = await bcrypt.hash(user.password, 10)
  user = {...user, password:hashed}
  let newUser = new User(user)
  return await newUser.save()
}

const login = async (user) => {
  let userFound = await User.findOne({email: user.email})
  if (!userFound) return false
  try {
    await bcrypt.compare(user.password, userFound.password)
    return userFound
  } catch (error) {
    return false
  }
}

const getAllUsers = async () => {
  return await User.find().select({"password": 0, "__v": 0} )
}



module.exports = {signup, login, getAllUsers}