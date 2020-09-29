//-----------------
//DEPENDENCIES
//-----------------
const { Router } = require('express');
const auth = require('../authmiddleware');
const Record = require('../../models/records');

//Create Router
const router = Router();

//-----------------
//ROUTES
//-----------------
router.get('/', (req, res) => {
    res.render('record/index');
});

//Export Router
module.exports = router;