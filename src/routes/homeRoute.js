const express = require('express');
const bombayModel = require('../models/bombayModel');
const router = express.Router();
// router.get('/', (req, res)=> {
//     res.render('home');
// })
router.get('/', async (req, res)=> {
    const data = await bombayModel.find();
    res.render('home', {data});
});
router.post('/add',  async function(req, res) {
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

module.exports= router;
