const Submission = require('../model/Submission')

// TODO: get all submission with quiz detail array
const getAllSubmissions = async () => {
  return await Submission.find()
}

module.exports = {getAllSubmissions}