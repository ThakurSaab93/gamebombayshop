const express= require('express');
const router = express.Router();

router.get('/register', (req, res)=>{
    res.send('hello from register');
})

module.exports= router;