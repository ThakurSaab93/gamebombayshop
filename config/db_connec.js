const mongoose = require('mongoose');
const passwrd= "gamebombaylive FxNIFDlizChlEh0Q"

const db_connec = mongoose.connect(process.env.MONGO_URL)
.then(()=> {
    console.log('db connect')
});
module.exports= {db_connec};