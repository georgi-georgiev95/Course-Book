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
    const userData = await userService.register({ username, email, password });
    const token = await generateToken(userData);
    res.cookie(ENV.COOKIE_NAME, token);
    res.redirect('/');
})

module.exports = router;