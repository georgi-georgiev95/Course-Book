const User = require('../models/User');

exports.register = ({ username, email, password }) => {
    return User.create({ username, email, password });
}