//-----------------
//DEPENDENCIES
//-----------------
const { Router } = require('express');
const auth = require('../authmiddleware');
const User = require('../../models/auth');
const { route } = require('../auth');

//Create Router
const router = Router();

//-----------------
//ROUTES
//-----------------

//Destroy
router.delete('/:id', auth, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id, (error, foundUser) => {
            res.redirect('/')
        });
    } catch {
        console.log(error);
    }
})
//Update
router.put('/edit/:id', auth, async (req, res) => {
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
router.get('/edit/:id', auth, async (req, res) => {
    try {
        await User.findById(req.params.id, (error, foundUser) => {
            res.render('user/edit', {
                user: foundUser
            });
        });
    } catch (error)  {
        console.log(error);
    }
});
//Show
router.get('/:id', auth, async (req, res) => {
    try {
        await User.findById(req.params.id, (error, foundUser) => {
            res.render('user/show', {
                user: foundUser
            });
        })
    } catch (error)  {
        console.log(error);
    }
});

//Export Router
module.exports = router;