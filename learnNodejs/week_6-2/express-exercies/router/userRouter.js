const express = require('express')
const router = express.Router();
const User = require('../models/users')


router.post('/make-user',async(req,res)=>{
  const user = new User({
    username : req.body.username,
    password : req.body.password,
  })
  await user.save((err)=>{
    err?res.sendStatus(500):res.sendStatus(200)
  });
})

router.delete('/delete-all',(req,res)=>{
  User.deleteMany({},(err)=>{
    err?res.sendStatus(500):res.sendStatus(200)
  })
})

module.exports = router;