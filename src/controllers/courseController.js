const router = require("express").Router();

const courseService = require('../services/courseService');

router.get('/dashboard', async (req, res) => {
    const courses = await courseService.getAll().lean();

    res.render('courses/catalog', { courses });

});

router.get('/create', (req, res) => {
    res.render('courses/create');
})

module.exports = router;