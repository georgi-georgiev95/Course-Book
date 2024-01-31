const Course = require('../models/Course');

exports.getAll = () => Course.find();

exports.create = (courseData) => Course.create(courseData);

exports.getOne = (id) => Course.findById(id).populate('owner');

exports.update = (id, courseData) => Course.findByIdAndUpdate(id, courseData);