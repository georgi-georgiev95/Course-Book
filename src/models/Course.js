const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5
    },
    type: {
        type: String,
        required: true,
        minlength: 3
    },
    certificate: {
        type: String,
        required: true,
        minlength: 2
    },
    image: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^(http|https):\/\//.test(value);
            },
            message: props => `${props.value} is not a valid URL!`
        }
    },
    description: {
        type: String,
        required: true,
        minlength: 10
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    signUpList: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
