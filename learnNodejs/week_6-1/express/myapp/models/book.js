const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 데이터 선언
const book = new Schema({
  bookname: String,
  auther: String,
  price: {
    type:Number,
    default: 10000,
  },
  publish:Date,
  sales:{
    type:Boolean,
    default:true,
  }
})

const bookData = mongoose.model('bookInfo',book);
module.exports = bookData;