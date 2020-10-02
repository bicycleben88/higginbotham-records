//------------------
//DEPENDENCIES
//------------------
const { Router } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../../models/auth');

//Create Router 
const router = Router();

//-------------------
//ROUTES
//-------------------
//--------SignUp Page-----------
router.get('/signup', (req, res) => {
    res.render('auth/signup.jsx');
});
//Create New User Post Request
router.post('/signup', async (req, res) => {
    if (req.body.image === '') {
        req.body.image = 'https://i.imgur.com/zYfW33v.jpg'
    }
    try {
        //Encrypt Password
        req.body.password = await bcrypt.hash(req.body.password, 10);
        //Save New User in DB
        const newUser = await User.create(req.body)
        res.redirect('/auth/login');
    } catch (error) {
        console.log(error) 
    }

});
//----------LogIn Page-----------
router.get('/login', (req, res) => {
    res.render('auth/login.jsx');
});
//LogIn Post Request 
router.post('/login', async (req, res) => {
    //Find User
    const user = await User.find( {username:  req.body.username});
    console.log(user);
    //Check if User was Found
    if (user.length > 0) {
        const check = await bcrypt.compare(req.body.password, user[0].password);
        if (check) {
        //Save Info in Session that User is LoggedIn and Username
        req.session.login = true;
        req.session.username = user[0].username;
        req.session.userId = user[0]._id;
        res.redirect(`/user/${user[0]._id}`);
        } else {
            //Redirect to LogIn Page 
            res.render('auth/login2');
        }
    } else {
        //Redirect to LogIn Page 
        res.render('auth/login2');
    }
});
//-------LogOut--------------
router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

//Export Router
module.exports = router;