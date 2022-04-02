const Quiz = require('../model/Quiz')
const Submission = require('../model/Submission')
const config = require('../config')

const addQuiz = async (obj) => {
  const quiz = new Quiz(obj)
  return await quiz.save()
}

const getRandomQuizByCategory = async (category, howMany) => {

}

const submitQuiz = async (test) => {
  let now = new Date()
  let submitted_at = now.toLocaleDateString('en-US', config.date.options)
}

module.exports = {getRandomQuizByCategory, submitQuiz, addQuiz}