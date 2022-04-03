const express = require('express')
const cookieParser = require('cookie-parser')
const { authRouter } = require('./router/auth')
const { quizRouter } = require('./router/quiz')
const { feedbackRouter } = require('./router/feedback')
const { adminRouter } = require('./router/admin')
const { viewRouter } = require('./router/view')
const { isAuth } = require('./middleware/auth')
const config = require('./config')
const hbs = require('hbs')
require('./db/db')
const app = express()
app.use(express.json())
app.use(cookieParser())

const publicPath = config.root.public
app.set("view engine", "hbs")
app.set("views", config.root.views)

hbs.registerPartials(config.root.partials)


app.use(express.static(publicPath));

// user login / signup / logout
app.use('/user', authRouter)

// taking quizzes and submit the test
app.use('/quiz', isAuth, quizRouter)

// customer can leave feedbacks
app.use('/feedback', feedbackRouter)

// adming can see users, submissions, feedback list
app.use('/admin', adminRouter)

// view web pages
app.use('/', viewRouter)



app.listen(3000, () => {
  console.log('server is up on port 3000')
})

