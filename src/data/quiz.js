const Quiz = require('../model/Quiz')


const addQuiz = async (obj) => {
  const quiz = new Quiz(obj)
  return await quiz.save()
}

const getQuizByCategory = async (category) => {
  return await Quiz.find({category}).select({"__v":0})
}

module.exports = {getQuizByCategory, addQuiz}