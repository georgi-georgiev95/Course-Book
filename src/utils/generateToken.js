const jwt = require('../lib/jwt');
const ENV = require('./constants');

module.exports = async (userData) => {
    const payload = {
        username: userData.username,
        email: userData.email,
        id: userData._id
    };

    const token = await jwt.sign(payload, ENV.SECRET);

    return token;
}