const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.register = ({ username, email, password }) => {
    return User.create({ username, email, password });
};

exports.login = async ({ email, password }) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Invalid email or password!');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error('Invalid email or password!');
    }

    return user;
}