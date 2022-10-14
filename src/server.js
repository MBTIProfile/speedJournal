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
const { request } = require('express');
app.use(cors(corsOptions));
// 내장 미들웨어 연결
app.use(express.json());

app.listen(9091, function () {
  console.log("server start")
})
const categories = require("./api/categories")


app.post('/findCategories', async function (req, res) {
  // Get ID token and CSRF token.
  console.log("call")
  const categoriesData = req.body.data;

  const result = await categories.findCategories(categoriesData)
  console.log(result)
  res.json(result)
});

// async function setBookMark(data){
//   const result = 
//   return result
// }