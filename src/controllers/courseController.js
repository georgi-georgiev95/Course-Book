const router = require("express").Router();

const courseService = require('../services/courseService');

router.get('/dashboard', async (req, res) => {
    const courses = await courseService.getAll().lean();

    res.render('courses/catalog', { courses });

});

router.get('/create', (req, res) => {
    res.render('courses/create');
});

router.post('/create', async (req, res) => {
    const courseData = {
        ...req.body,
        owner: req.user.id 
    };
    try {
        await courseService.create(courseData);
        res.redirect('/courses/dashboard');
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;