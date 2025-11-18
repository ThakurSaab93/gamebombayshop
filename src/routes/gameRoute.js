const express = require('express');
const router = express.Router();
const gameModel = require('../models/gameModel');

router.get('/', async (req, res) => { 
    const data = await gameModel.find();
    res.render('gameHome', {data});
});

router.get('/create', (req, res)=> {
    res.render('gameAdd')
});

router.post('/create', async (req, res)=> {
    const {date, faridabad, ghaziabad, gali, desawar}= req.body;
    const gameData = await gameModel.create({
        date,
        faridabad,
        ghaziabad,
        gali,
        desawar
    })
    await gameData.save();
    res.send(gameData)
});
router.get('/read', async (req, res)=> {
    const data = await gameModel.find();
    res.render('gameRead', {data});
});

router.get('/edit/:id', async (req, res)=> {
  const id = req.params.id;
  const data = await gameModel.findOneAndUpdate({_id:id}, req.body,{new:true});
  res.render('gameEdit', {data});
});
router.post('/edit/:id', async (req, res)=> {
 const id = req.params.id;
 const data = await gameModel.findByIdAndUpdate({_id: id}, req.body)
 res.status(200).redirect('/game/read');
});
router.get('/delete/:id', async (req, res)=>{
 const findID = await gameModel.findByIdAndDelete({_id:req.params.id}, req.body);
 res.status(200).redirect('/game/read'); 
});
module.exports = router;