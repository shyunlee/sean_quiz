const Mongoose = require('mongoose')
const Schema = Mongoose.Schema
const userSchema = new Mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required:true,
  },
  password: {
    type: String,
    required: true
  },
  level: String
})

const User = Mongoose.model("User", userSchema)
module.exports = User