const auth = (req, res, next) => {
  if (req.session.login) {
    next();
  } else {
    res.render("auth/login");
  }
};

module.exports = auth;
