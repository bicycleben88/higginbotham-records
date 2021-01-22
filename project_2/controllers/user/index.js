//Dependencies
const { Router } = require("express");
const auth = require("../authmiddleware");
const User = require("../../models/auth");
const { route } = require("../auth");

const router = Router();

//Routes
//Destroy
router.delete("/:id", auth, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id, (error, foundUser) => {
      req.session.destroy();
      res.redirect("/");
    });
  } catch {
    console.log(error);
  }
});
//Update
router.put("/edit/:id", auth, async (req, res) => {
  try {
    req.body.username = req.session.username;
    User.findByIdAndUpdate(req.params.id, req.body, (error, foundUser) => {
      req.body.password = foundUser.password;
      res.redirect(`/user/${req.params.id}`);
    });
  } catch (error) {
    console.log(error);
  }
});
//Edit
router.get("/edit/:id", auth, async (req, res) => {
  try {
    await User.findById(req.params.id, (error, foundUser) => {
      res.render("user/edit", {
        user: foundUser,
        id: req.params.id,
      });
    });
  } catch (error) {
    console.log(error);
  }
});
//Show
router.get("/:id", auth, async (req, res) => {
  if (req.params.id === undefined) {
    res.redirect("auth/login");
  }
  try {
    await User.findById(req.params.id, (error, foundUser) => {
      if (foundUser) {
        res.render("user/show", {
          user: foundUser,
          id: req.params.id,
        });
      } else {
        res.redirect("/auth/login");
      }
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
