const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
  userId:{
    type:String,
    required:true, // 필수 입력
    unique:true, // 중복 방지
  },
  job:{
    type:String,
    required:true,
  },

});

const userData = mongoose.model('users',userSchema);
module.exports = userData;