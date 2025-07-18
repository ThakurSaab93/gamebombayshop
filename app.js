const dotenv= require('dotenv');
dotenv.config();
const express = require('express');
const port = process.env.port;
const db_connec = require('./config/db_connec');
const homeRoute = require('./src/routes/homeRoute');
const gameRoute = require('./src/routes/gameRoute');
const path= require('path');
const app  = express();
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('', homeRoute);
app.use('/game', gameRoute);


app.listen(port, ()=> {
    console.log(`server is running ${port}`);
    
});