const jwt = require('jsonwebtoken')

const isAuth = async (req, res) => {
  let token = req.cookies['token']
  console.log(token)
  return res.sendStatus(200)
}

module.exports = {isAuth}