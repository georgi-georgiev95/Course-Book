const Course = require('../models/Course');

exports.getAll = () => Course.find();