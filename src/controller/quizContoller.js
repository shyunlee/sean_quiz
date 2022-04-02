const quizRepo = require('../data/quiz')

const addQuiz = async (req, res) => {
  const result = await quizRepo.addQuiz(req.body)
  console.log(result)
  res.send(200)
}

const takeTest = async (req, res) => {
  let category = req.body.category
  res.send(200)
}

const submitTest = async (req, res) => {
  res.send(200)
}



module.exports= {addQuiz, takeTest, submitTest}