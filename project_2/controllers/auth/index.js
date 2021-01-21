// Dependencies
const { Router } = require("express");
const bcrypt = require("bcryptjs");
const User = require("../../models/auth");
const router = Router();

// Routes
// SignUp
router.get("/signup", (req, res) => {
  res.render("auth/signup.jsx");
});
router.post("/signup", async (req, res) => {
  if (req.body.image === "") {
    req.body.image = "https://i.imgur.com/zYfW33v.jpg";
  }
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create(req.body);
    res.redirect("/auth/login");
  } catch (error) {
    console.log(error);
  }
});

// LogIn
router.get("/login", (req, res) => {
  res.render("auth/login.jsx");
});
router.post("/login", async (req, res) => {
  const user = await User.find({ username: req.body.username });
  if (user.length > 0) {
    const check = await bcrypt.compare(req.body.password, user[0].password);
    if (check) {
      req.session.login = true;
      req.session.username = user[0].username;
      req.session.userId = user[0]._id;
      res.redirect(`/user/${user[0]._id}`);
    } else {
      res.render("auth/login");
    }
  } else {
    res.render("auth/login");
  }
});

// LogOut
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
