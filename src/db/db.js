const mongoose = require('mongoose')
const uri = 'mongodb+srv://seanlee:seandev0909@cluster0.yj8og.mongodb.net/quizDB?retryWrites=true&w=majority'

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
},
(error, client) => {
  if (error) {
    return console.log(error);
  }
  console.log("connect to db");
})