const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const userCheck = async (email) => {
    const user = await User.findOne({ email });
    return !!user;
}
// load signup page
router.get('/signup', (req, res) => {
    res.render('auth/signUp');
})

// load the log in page
router.get('/signin', (req, res) => {
    res.render('auth/signIn');
})

// For Signup
router.post('/signup', async (req, res) => {
    const { name, email, password, dateOfBirth } = req.body;

    // Check if the user already exists
    if (await userCheck(email)) {
        return res.render('auth/signUp', {
            message: "User with the provided email already exists"
        });
    } else {
        try {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            const newUser = new User({
                name,
                email,
                password: hashedPassword,
                dateOfBirth
            });

            await newUser.save();
            // Redirect to home page on successful signup
            res.redirect('/home');

        } catch (error) {
            res.render('auth/signUp', {
                message: "An error occurred while saving the user"
            });
        }
    }
});

// Signin
router.post('/signin', async (req, res) => {

});

module.exports = router;
