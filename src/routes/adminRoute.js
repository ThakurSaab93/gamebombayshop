const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt  = require('jsonwebtoken');
const adminModel = require('../models/adminModel');

router.get('/register', (req, res)=>{
    res.render('register');
});
router.get('/', (req, res)=>{
    res.send('admin route');
});

router.post('/register', (req, res)=> {
    try {
        const {name, email, password}= req.body;
        bcrypt.hash(password, 10, async (err, hash)=> {
            const admin = await adminModel.create({
                name,
                email,
                password: hash
            });
            res.send(admin);
        })
    } catch (err) {
        res.send(err)
    }
});
router.get('/login', (req, res)=> {
    res.render('login');
});
router.post('/login', async (req, res)=> {
    try {
        const {email, password}= req.body;
        const admin = await adminModel.findOne({email});
        // console.log(admin); 
        if(!admin) return res.send('Wrong email address');
        bcrypt.compare(password, admin.password, (err, result)=> {
            if(result) {
                const token = jwt.sign({id: admin._id, email}, process.env.jwt_secret_key);
                res.cookie('token', token);
                res.redirect('/create');
            } else{
                res.send('wrong password');
            }
        })

    } catch (err) {
        res.send(err)
    }
})

module.exports= router;