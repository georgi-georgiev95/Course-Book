const Course = require('../models/Course');

exports.getAll = () => Course.find();

exports.create = (courseData) => Course.create(courseData);