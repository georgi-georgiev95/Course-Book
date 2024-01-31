const router = require("express").Router();

const userService = require('../services/userService');
const generateToken = require('../utils/generateToken');
const ENV = require('../utils/constants');

router.get("/register", (req, res) => {
    res.render('users/register')
});

router.get("/login", (req, res) => {
    res.render('users/login')
});

router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const userData = await userService.register({ username, email, password });
        const token = await generateToken(userData);
        res.cookie(ENV.COOKIE_NAME, token);
        res.redirect('/');
    } catch (err) {
        console.log(err);
    }
});

router.post("/login", async (req, res) => { 
    const { email, password } = req.body;
    try {
        const userData = await userService.login({ email, password });
        const token = await generateToken(userData);
        res.cookie(ENV.COOKIE_NAME, token);
        res.redirect('/');
    } catch (err) {
        console.log(err);
    }
})

router.get('/logout', (req, res) => {
    res.clearCookie(ENV.COOKIE_NAME);
    res.redirect('/')
});

module.exports = router;