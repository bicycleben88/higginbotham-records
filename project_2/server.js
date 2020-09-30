//---------------------
//ENVIRONMENTAL VARIABLES
//---------------------
require('dotenv').config();
const { PORT, SECRET } = process.env;


//-----------------------
//DEPENDENCIES
//-----------------------
//Express
const express = require('express');
const app = express();
//Import DataBase Connections
const mongoose = require('./db/dbconn');
//Routers
const authRouter = require('./controllers/auth');
const testRouter = require('./controllers/test');
const recordRouter = require('./controllers/records');
const userRouter = require('./controllers/user');
//Other Imports
const session = require('express-session');
const methodOverride = require('method-override');
const morgan = require('morgan');

//------------------
//SET VIEW ENGINE
//------------------
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//------------------
//MIDDLEWARE
//------------------
//Sessions allows use of req.session to track session data
app.use(
    session({
        secret: SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: process.env.NODE_ENV === "production"},
    })
);
app.use(express.static('public'));
app.use(express.urlencoded( { extended: true }));
//Use for logging
app.use(morgan('tiny'));


//-------------------
//ROUTES/ROUTERS
//-------------------
app.get('/', (req, res) => {
    console.log(`Listening on PORT ${PORT}`);
    res.redirect('/records');
});
app.use('/auth', authRouter);
app.use('/test', testRouter);
app.use('/records', recordRouter);
app.use('/user', userRouter);

//-------------------
//LISTENER
//-------------------
app.listen(PORT, () => {
    console.log(`Yerp' connected on PORT${PORT}`);
});
