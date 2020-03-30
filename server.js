// libraries
require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

// database url
const dbUrl =
  process.env.NODE_ENV === "production"
    ? process.env.PROD_DB
    : process.env.DEV_DB;

// router
const mainRouter = require("./app/api/v1");

// instantiate app & decalre constants
const app = express();
const port = parseInt(process.env.PORT, 10);

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static file path
app.use(express.static(path.join(__dirname, "dist")));

// database connection
mongoose.connect(
  dbUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  },
  err => {
    if (err) console.log(err);
    console.log("database connected...");
  }
);

// default routes
app.use("/api/v1", mainRouter);
app.get("/", (req, res) => {
  if (process.env.NODE_ENV === "production") {
    return res.sendFile(path.join(__dirname, "dist", "index.html"));
  }
  return res.status(200).send({
    message: "Logan app running"
  });
});

// start app
app.listen(port, () => console.log(`Server running on port ${port}...`));
