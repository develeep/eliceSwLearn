const express = require('express');
const router = express.Router();
// const bookSchema = require('../models/book')
const controller = require('../controller/post')

router.get('/',controller.mainPost)
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

// router.get('/bookinfo/:id',(req,res)=>{
//   const authorname = req.params.id;
//   // Movie.find({ year: { $gte: 1980, $lte: 1989 } }, function(err, arr) {});
//   // bookSchema.findOne({auther:authorname},(err,result)=>{
//   //   return result?res.json(result):res.send('검색결과 없음')
//   // })
//   bookSchema.find({auther:authorname})
//   .then(result=>{
//     res.json(result);
//   }).catch(err=>{
//     console.error(err);
//   })
// })
router.get('/bookinfo/:id',controller.getbookinfo)
router.get('/del',(req,res)=>{
  res.render('delete')
})
// router.delete('/del/:id',(req,res)=>{
//   const bookname = req.params.id
//   bookSchema.findOneAndDelete({bookname:bookname})
//   .then(result=>{
//     res.json({redirect:'/expost'});
//   }).catch(err=>{
//     console.error(err);
//   })
// })
router.delete('/del/:id',controller.bookdeleteAll)
// router.post('/del/:id',(req,res)=>{
//   const bookname = req.params.id
//   bookSchema.findOneAndDelete({bookname:bookname})
//   .then(result=>{
//     res.json({redirect:'/expost'});
//   }).catch(err=>{
//     console.error(err);
//   })
// })
router.post('/del/:id',controller.bookdelete)
// router.post('/addbook',(req,res,next)=>{
//   const bookname = req.body.bookname;
//   const auther = req.body.auther;
//   const price = req.body.price;
//   const publish = req.body.publish;
//   // 웹 : 1대1 통신 => 1요청 1응답 통신 종료
//   let bookData = new bookSchema({
//     bookname: bookname,
//     auther : auther,
//     price : price,
//     publish: publish,
//   })

//   bookData.save();
//   res.redirect('/expost')
// })
router.post('/addbook',controller.addbook)
module.exports = router