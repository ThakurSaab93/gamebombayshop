const express = require('express');
const router = express.Router();
const gameModel = require('../models/gameModel');

router.get('/', async (req, res) => { 
    const data = await gameModel.find();
    res.render('gameHome', {data});
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
})

module.exports = router;