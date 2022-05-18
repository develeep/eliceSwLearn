var express = require('express');
var router = express.Router();
const userSchema = require('../models/newuser')
const bcrypt = require('bcrypt');
const {body,validationResult} = require("express-validator");
const session = require('express-session');
const parseurl = require('parseurl')
/* GET users listing. */
router.use(
  session({
    secret: "12345",
    resave: false,
    saveUninitialized: true
  })
);

router.use(function (req, res, next) {
  if (!req.session.views) {
    req.session.views = {}
  }

  // get the url pathname
  var pathname = parseurl(req).pathname

  // count the views
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1

  next()
})
router.get('/foo', function (req, res, next) {
  res.send('you viewed this page ' + req.session.views['/foo'] + ' times')
})

router.get('/', function(req, res, next) {
  res.render('blog/auth')
});
router.get('/cookie',(req,res)=>{
          // "key" "value"
  res.cookie('drink','water')
  res.send('set cookies')
})
router.post('/signup', body('email').isEmail().withMessage('이메일 형식을 따르셔야 합니다.'),
  body('password').isLength({ min: 5 }).withMessage('비밀번호는 최소 5글자 이상입니다.')
  , async (req, res) => {
    const {email,password} = req.body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      })
    }
    const emailMatch = await userSchema.find({email:email})
    if(emailMatch){
      res.status(400).json({
        msg:'이미 존재하는 이메일입니다.'
      })
    }else{
      // 비밀번호를 복호화해서 담음
      const salt = bcrypt.genSaltSync(10);
      const bcryptPw = bcrypt.hashSync(password, salt);
      userSchema.create({
        email:email,
        password:bcryptPw
      }).then(result=>{
        res.status(200).json(result)
      })
    }
  });
router.get('/login',(req,res)=>{
  res.render('blog/login');
})
router.post('/login',async(req,res)=>{
  const {email,password} = req.body
  // 가입 O X
  const userData = await userSchema.findOne({email:email}).exec();
  if(!userData){
    return res.status(401).json({msg:'가입되지 않은 계정입니다.'})

  }
  else{
    const pwMatch = bcrypt.compareSync(password,userData.password)
    if(pwMatch){
      res.status(200).json({msg:'OK'});
    }else{
      res.status(401).json({msg:'비밀번호가 일치하지 않습니다.'})
    }
  }
})
module.exports = router;
