const express = require('express')
const quizController = require('../controller/quizContoller')


const router = express.Router()


// view taking quizzes by selected category
router.get('/:category', quizController.takeTest)

// when user submit the quizzes and view result
router.post('/submit', quizController.submitTest)

router.post('/add', quizController.addQuiz)


module.exports = {quizRouter: router}