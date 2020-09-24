//-----------------
//DEPENDENCIES
//-----------------
const { Router } = require('express');
const auth = require('../authmiddleware');

//Create Router
const router = Router();

//-----------------
//ROUTES
//-----------------
router.get('/', auth, (req, res) => {
    res.send('if you see this you are logged in')
});

//Export Router
module.exports = router;