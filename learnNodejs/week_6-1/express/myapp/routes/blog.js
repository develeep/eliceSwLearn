const {Router} = require('express')
const router = Router();
const blogSchema = require('../models/blog')

router.get('/',async(req,res)=>{
  const blog = await blogSchema.find({}).exec();
  res.render('blog/blog',{content : blog});
})
router.get('/:id',async(req,res)=>{
  const id = req.params.id
  const result = await blogSchema.findOne({no:id}).exec();
  res.json(result)
})

router.get('/write',(req,res)=>{
  res.render('blog/write');
})
router.post('/write',(req,res,next)=>{
  const {title,content} = req.body;
  const blog = new blogSchema({
    title:title,
    content:content,
  })
  blog.save()
    .then(result => {
      console.log(result);
      res.redirect('/blog');
    }).catch(err=>{
      console.log(err);
      next(err);
    });
})

module.exports = router