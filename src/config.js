require('dotenv').config()
const path = require('path')

const config = {
  jwt: {
    secretKey: process.env.JWT_SECRET_KEY,
    expiredInSec: parseInt(process.env.JWT_EXPIRES_SEC)
  },
  date: {
    options : { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:"numeric", minute:"numeric", second:"numeric"}
  },
  root: {
    views: path.join(__dirname, '/views'),
    public: path.join(__dirname, '/public'),
    partials: path.join(__dirname, '/views/partials')
  }
}

module.exports = config