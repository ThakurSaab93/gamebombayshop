const jwt  = require('jsonwebtoken');

const isLoggedIn  = (req, res, next)=> {
    if(!req.cookies.token) return res.redirect('/admin/login');
    const data = jwt.verify(req.cookies.token, 'secret');
    next();
}
module.exports =  {isLoggedIn};
