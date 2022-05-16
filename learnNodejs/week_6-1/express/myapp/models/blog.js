const mongoose = require('mongoose');
const schema = mongoose.Schema
const autoIncrement = require('mongoose-auto-increment');
// auto-increment.

autoIncrement.initialize(mongoose)

const blogSchema = new schema({
  title:{
    type:String,
    required:true,
  },
  content:{
    type:String,
    required:true,
  },
  no:Number,
},{
  timestamps:true,
})

blogSchema.plugin(autoIncrement.plugin,{
  model:'blog',
  field:'no',
  startAt:4,
  increment:1,
})


const model = mongoose.model('blog',blogSchema)
module.exports = model