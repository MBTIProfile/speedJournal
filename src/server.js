// express 모듈 가져옴.
const express = require('express')
// 미들웨어 선언
const app = express()

//크로스도메인 이슈 해결
const corsOptions = {
  credentials: true,
  ///..other options
};
const cors = require('cors');
app.use(cors(corsOptions));
// 내장 미들웨어 연결
app.use(express.json());

app.listen(9091, function () {
  console.log("server start")
})
const categories = require("./api/categories")
const users = require("./api/users")


app.post('/findCategories', async function (req, res) {
  // Get ID token and CSRF token.
  console.log("findCategories")
  const categoriesData = req.body.data;

  const result = await categories.findCategories(categoriesData)
  console.log(result)
  res.json(result)
});

app.post('/saveJournal', async function (req, res) {
  // Get ID token and CSRF token.
  console.log("saveJournal")
  const journalData = req.body.data;

  const result = await users.saveJournal(journalData)
  console.log(result)
  res.json(result)
});
app.post('/findJournal', async function (req, res) {
  // Get ID token and CSRF token.
  console.log("findJournal")
  const journalData = req.body.data;

  const result = await users.findJournal(journalData)
  console.log(result)
  res.json(result)
});

app.post('/sessionLogin', async function (req, res) {
  // Get ID token and CSRF token.
  const idToken = req.body.data;

  const result = await users.getUserInfo(idToken)
  console.log("result : ")
  console.log(result)
  res.json(result)
});
// async function setBookMark(data){
//   const result = 
//   return result
// }