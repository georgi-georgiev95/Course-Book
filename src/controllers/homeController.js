const router = require("express").Router();

const courseService = require('../services/courseService');

router.get("/", async (req, res) => {
    const courses = await courseService.getAll().lean();
    res.render('home', { courses });
});

router.get('/404', (req, res) => {
    res.render('404');
})

module.exports = router;