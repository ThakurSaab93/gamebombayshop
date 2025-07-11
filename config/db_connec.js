const mongoose = require('mongoose');
const passwrd= "gamebombaylive FxNIFDlizChlEh0Q";
const mongo_url = process.env.MONGO_URL;

const db_connec = mongoose.connect(mongo_url)
.then(()=> {
    console.log('db connect')
});
module.exports= {db_connec};