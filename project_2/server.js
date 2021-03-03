//Dependencies
require("dotenv").config();
const { PORT, SECRET } = process.env;
const express = require("express");
const app = express();
const mongoose = require("./db/dbconn");
const session = require("express-session");
const methodOverride = require("method-override");
const morgan = require("morgan");
const mongoStore = require("connect-mongo")(session);

//Routers
const authRouter = require("./controllers/auth");
const testRouter = require("./controllers/test");
const recordRouter = require("./controllers/records");
const userRouter = require("./controllers/user");
const reviewRouter = require("./controllers/reviews");
const drumRouter = require("./controllers/drum");

//View Engine
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//Middleware
//Sessions allows use of req.session to track session data
//Use for Heroku
app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
    store: new mongoStore({ mongooseConnection: mongoose.connection }),
  })
);
//Use for LocalHost
// app.use(
//   session({
//     secret: SECRET,
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: process.env.NODE_ENV === "production" },
//   })
// );
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(morgan("tiny"));

//Routes
app.get("/", (req, res) => {
  console.log(`Listening on PORT ${PORT}`);
  res.redirect("/records");
});
app.use("/auth", authRouter);
app.use("/test", testRouter);
app.use("/records", recordRouter);
app.use("/user", userRouter);
app.use("/reviews", reviewRouter);
app.use("/drum", drumRouter);

app.listen(PORT, () => {
  console.log(`Yerp' connected on PORT${PORT}`);
});
