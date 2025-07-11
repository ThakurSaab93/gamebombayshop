const express = require('express');
const port = 7000;
const db_connec = require('./config/db_connec');
const homeRoute = require('./src/routes/homeRoute');
const path= require('path');
const app  = express();
app.set('view engine', 'ejs');

app.use(express.json());
app.use('', homeRoute);
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res)=> {
//     res.send('hello world');
// })
// app.get('/', (req, res)=> {
//     res.render('home');
// })
app.listen(port, ()=> {
    console.log('server is running ');
    
});