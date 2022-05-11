const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
  res.render('post')
})
router.post('/',(req,res,next)=>{
  const name = req.body.name;
  const phone = req.body.phone;
  const date = req.body.date;
  // 웹 : 1대1 통신 => 1요청 1응답 통신 종료
  // res.json({name:name,phone:phone,date:date});
  next();
})

router.post('/',(req,res)=>{
  // 호출한 경로로 재 접근
  res.redirect('/expost')

})

module.exports = router