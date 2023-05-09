const router = require('express').Router();
const passport = require('passport');

router.use(passport.initialize());

// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ['profile','email']
}));

// callback route for google to redirect to

// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    // res.send(req.user);
    res.redirect('../../index.html');
});

module.exports = router;