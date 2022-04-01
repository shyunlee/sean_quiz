const express = require('express')
const { authRouter } = require('./router/auth')
const { quizRouter } = require('./router/quiz')
const { feedbackRouter } = require('./router/feedback')
const { adminRouter } = require('./router/admin')
const { viewRouter } = require('./router/view')

const app = express()
app.use(express.json())

// user login / signup / logout
app.use('/user', authRouter)

app.use('/quiz', quizRouter)

app.use('/feedback', feedbackRouter)

app.use('/admin', adminRouter)

app.use('/', viewRouter)

app.listen(3000, () => {
  console.log('server is up on port 3000')
})