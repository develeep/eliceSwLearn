require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require('mongoose')
const {MONGO_URI,PORT} = process.env
const userRouter = require('./router/userRouter')
const User = require('./models/users')

mongoose
  .connect(MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=>{console.log('Connected to MongoDB')})
  .catch(err=>console.log(err))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/user',userRouter)

app.set('view engine','ejs');
app.set('views',__dirname + "/views")

app.get("/", (req, res) => {
  User.find({},(err,users)=>{
    err?console.log(err):res.render('index',{users})
  })
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
