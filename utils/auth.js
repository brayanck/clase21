const helpers = {}
helpers.isAuthenticated=(req, res, next)=> {
    if (req.isAuthenticated()) {
        return next()
    } else {
        res.redirect('/auth/login');
    }
}
module.exports = helpers