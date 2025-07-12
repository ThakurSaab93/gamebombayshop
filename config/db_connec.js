const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const mongo_url = process.env.MONGO_URL;

const db_connec = mongoose.connect(mongo_url)
.then(()=> {
    console.log('db connect')
});
module.exports= {db_connec};