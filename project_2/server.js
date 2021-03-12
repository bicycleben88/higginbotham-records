//Dependencies
require("dotenv").config();
const { PORT, SECRET } = process.env;
const express = require("express");
const mongoose = require("./db/dbconn");
const session = require("express-session");
const methodOverride = require("method-override");
const morgan = require("morgan");
const mongoStore = require("connect-mongo")(session);
const app = express();

//Routers
const authRouter = require("./controllers/auth");
const testRouter = require("./controllers/test");
const recordRouter = require("./controllers/records");
const userRouter = require("./controllers/user");
const reviewRouter = require("./controllers/reviews");
const drumRouter = require("./controllers/drum");
const apiRouter = require("./controllers/api");

//View Engine
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//Middleware
app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
    store: new mongoStore({ mongooseConnection: mongoose.connection }),
  })
);
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
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Yerp' connected on PORT${PORT}`);
});
