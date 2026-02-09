const express = require('express');
const bombayModel = require('../models/bombayModel');
const {isLoggedIn} = require('../middlewares/authMidd');

const router = express.Router();

app.get('/robots.txt', (req, res)=> {
    res.sendFile(path.join(__dirname, "robots.txt"));
});
app.get('/sitemap.xml', (req, res)=> {
    res.sendFile(path.join(__dirname, "sitemap.xml"));
});

router.get('/', async (req, res)=> {
    const data = await bombayModel.find();
    res.render('home', {data});
});
router.get('/create', isLoggedIn, (req, res)=> {
    res.render('add')
});
router.post('/create',  async function(req, res) {
  const detail =  await bombayModel.create({
    date: req.body.date,
    bombay_3pm: req.body.bombay_3pm,
    bombay_6pm: req.body.bombay_6pm,
    bombay_9pm: req.body.bombay_9pm,
    bombay_12am: req.body.bombay_12am,
    bombay_6am: req.body.bombay_6am,
  });
  await detail.save();
  res.send(detail);
});
router.get('/read', async (req, res)=> {
  const data = await bombayModel.find();
  // console.log(data);
  res.render('readPage', {data});
})
router.get('/edit/:id', async (req, res)=> {
  const id = req.params.id;
  const data = await bombayModel.findOneAndUpdate({_id:id}, req.body,{new:true});
  res.render('editPage1', {data});
})
router.post('/edit/:id', async (req, res)=> {
 const id = req.params.id;
 const data = await bombayModel.findByIdAndUpdate({_id: id}, req.body)
 res.status(200).redirect('/read');
});
router.get('/delete/:id', async (req, res)=>{
 const findID = await bombayModel.findByIdAndDelete({_id:req.params.id}, req.body);
 res.redirect('/read'); 
});

module.exports= router;
