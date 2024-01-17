import passport from '../config/passport.js';

export const loginWithGoogle = passport.authenticate('google', { scope: ['profile', 'email'] });

export const googleCallback = (req, res) => {
    passport.authenticate('google', {
        failureRedirect: '/',
        successRedirect: '/',
    })(req, res, () => {
        // This callback is invoked after authentication completes
        if (req.user) {
            res.json({ success: true, message: 'User logged in successfully' });
            console.log("User logged in successfully")
        } else {
            res.json({ success: false, message: 'Authentication failed' });
            console.log('Authentication failed')
        }
    });
};
