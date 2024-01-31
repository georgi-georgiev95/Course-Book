const jwt = require('../lib/jwt');
const ENV = require('../utils/constants');

exports.auth = () => (req, res, next) => {
    const token = req.cookies[ENV.COOKIE_NAME];
    if (!token) {
        return res.redirect('/users/login');
    }
    jwt.verify(token, ENV.SECRET, (err, payload) => {
        if (err) {
            return res.redirect('/users/login');
        }
        req.user = payload;
        next();
    })
};