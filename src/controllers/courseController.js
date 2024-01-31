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
});

router.get('/:courseId/details', async (req, res) => {
    const course = await courseService.getOne(req.params.courseId).lean();
    
    let isOwner = req.user?.id == course.owner._id;
    let isUser = req.user?.id;
    let isSigned = course.signUpList.some(x => x._id == req.user?.id);

    res.render('courses/details', { course, isOwner, isUser, isSigned });
});

router.get('/:courseId/edit', async (req, res) => {
    const course = await courseService.getOne(req.params.courseId).lean();
    res.render('courses/edit', { course });
});

router.post('/:courseId/edit', async (req, res) => {
    const id = req.params.courseId;
    const courseData = req.body;

    try {
        await courseService.update(id, courseData);
        res.redirect('/courses/dashboard');
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;