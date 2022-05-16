const bookSchema = require('../models/book')

const mainPost = (req,res)=>{
  res.render('post')
}
const mainPostnext = (req,res)=>{
  const {name,phone,date} = req.body.name;
  next();
}
const mainPostre = (req,res)=>{
  res.redirect('/expost')
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
const bookdelRender = (req,res)=>{
  res.render('delete')
}
module.exports = {mainPost,addbook,getbookinfo,bookdeleteAll,bookdelete,mainPostnext,mainPostre,bookdelRender}