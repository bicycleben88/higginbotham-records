const auth = (req, res, next) => {
    if (req.session.login) {
        next();
    } else {
        res.redirect('/records')
    }
}

module.exports = auth;
