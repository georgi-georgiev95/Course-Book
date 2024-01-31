const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 10
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    },
});

userSchema.virtual('rePassword')
    .set(function (value) {
        if (this.password !== value) {
            return 'Passwords do not match!';
        }
    });

const User = mongoose.model('User', userSchema);

module.exports = User;
