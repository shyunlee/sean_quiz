const quizRepo = require('../data/quiz')

const addQuiz = async (req, res) => {
  const result = await quizRepo.addQuiz(req.body)
  console.log(result)
  res.sendStatus(200)
}

// TODO: responds 10 random quizzes by category and render test page
const takeTest = async (req, res) => {
  let category = req.body.category
  res.sendStatus(200)
}

// TODO: submit test - 
const submitTest = async (req, res) => {
  res.sendStatus(200)
}



module.exports= {addQuiz, takeTest, submitTest}