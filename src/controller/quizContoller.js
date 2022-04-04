const _ = require('lodash')
const quizRepo = require('../data/quiz')
const submissionRepo = require('../data/submission')

const addQuiz = async (req, res) => {
  const result = await quizRepo.addQuiz(req.body)
  res.sendStatus(200)
}

// TODO: render test page
const takeTest = async (req, res) => {
  let category = req.params.category
  let result = await quizRepo.getQuizByCategory(category)
  let data = sortRandomLimit(result)
  let userInfo = req.userInfo
  res.render('exam', {userInfo,data, category})
}

// TODO: render result page
const submitTest = async (req, res) => { 
  try {
    let submit = req.body
    submit.userId = req.userInfo.userId
    let quizzes = submit.quizzes
    quizzes = quizzes.map(item => {
      let obj = {
        quiz:item._id,
        result: item.answer === item.selected?true:false,
        selected: item.selected
      }
      return obj
    })
    let filtered = quizzes.filter(item => item.result)
    let score = `${filtered.length} out of ${quizzes.length}`
    submit = {...submit, quizzes, score}
    let result = await submissionRepo.submitTest(submit)
    res.status(200).json({message: "submitted", data: result})
  } catch (error) {
    res.status(400).json({message:"submission failed"})
  }
}

const getResult = async (req, res) => {
  let userInfo = req.userInfo
  let submitId = req.params.submitId
  let result = await submissionRepo.findSubmissionById(submitId)
  let data = result[0]
  res.render('result', {userInfo, data})
}

const sortRandomLimit = (arr) => {
  let obj = {}
  let result = []
  while (result.length !== 10) {
    let idx = _.random(0,arr.length-1)
    if (obj[idx]) continue;
    result.push(arr[idx])
    obj[idx] = idx
  }
  return result
}



module.exports= {addQuiz, takeTest, submitTest, getResult}