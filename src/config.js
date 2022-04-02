require('dotenv').config()

const config = {
  jwt: {
    secretKey: process.env.JWT_SECRET_KEY,
    expiredInSec: parseInt(process.env.JWT_EXPIRES_SEC)
  },
  date: {
    options : { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:"numeric", minute:"numeric", second:"numeric"}
  }
}

module.exports = config