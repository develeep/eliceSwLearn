const bookSchema = require('../models/book')

const mainPost = (req,res)=>{
  res.render('post')
}
const addbook = (req,res,next)=>{
  const {bookname,auther,price,publish} = req.body
  const bookData = new bookSchema({
    bookname: bookname,
    auther : auther,
    price : price,
    publish: publish,
  })
  bookData.save();
  res.redirect('/expost')
} 
const getbookinfo = (req,res)=>{
  const authorname = req.params.id;
  // Movie.find({ year: { $gte: 1980, $lte: 1989 } }, function(err, arr) {});
  // bookSchema.findOne({auther:authorname},(err,result)=>{
  //   return result?res.json(result):res.send('검색결과 없음')
  // })
  bookSchema.find({auther:authorname})
  .then(result=>{
    res.json(result);
  }).catch(err=>{
    console.error(err);
  })
}
const bookdeleteAll = (req,res)=>{
  const bookname = req.params.id
  bookSchema.findOneAndDelete({bookname:bookname})
  .then(result=>{
    res.json({redirect:'/expost'});
  }).catch(err=>{
    console.error(err);
  })
}
const bookdelete = (req,res)=>{
  const bookname = req.params.id
  bookSchema.findOneAndDelete({bookname:bookname})
  .then(result=>{
    res.json({redirect:'/expost'});
  }).catch(err=>{
    console.error(err);
  })
}

module.exports = {mainPost,addbook,getbookinfo,bookdeleteAll,bookdelete}