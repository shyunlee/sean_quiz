const express = require('express')
const app = express()
app.use(express.json())

app.listen(3000, () => {
  console.log('server is up on port 3000')
})