const mongoose = require('mongoose');
const passwrd= "gamebombaylive FxNIFDlizChlEh0Q"
// const db_connec = mongoose.connect('mongodb://127.0.0.1:27017/bombay_shop')
// .then(()=> {
//     console.log('db connect')
// });
const db_connec = mongoose.connect('mongodb+srv://gamebombaylive:FxNIFDlizChlEh0Q@rajeshgame.b1ivcdy.mongodb.net/bombayShopDB')
.then(()=> {
    console.log('db connect')
});
module.exports= {db_connec};