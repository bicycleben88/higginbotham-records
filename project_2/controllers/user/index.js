//-----------------
//DEPENDENCIES
//-----------------
const { Router } = require('express');
const auth = require('../authmiddleware');
const User = require('../../models/auth');

//Create Router
const router = Router();

//-----------------
//ROUTES
//-----------------

//Destroy

//Update

//Edit

//Show
router.get('/:id', auth, (req, res) => {
    User.findById(req.params.id, (error, foundUser) => {
        res.render('user/show', {
            user: foundUser
        });
    })
});

//Export Router
module.exports = router;