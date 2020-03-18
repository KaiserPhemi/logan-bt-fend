// node modules
require("dotenv").config();
const express = require("express");

// router
const mainRouter = require("./server/api/v1");

// instantiate app & decalre constants
const app = express();
const port = parseInt(process.env.PORT, 10);

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// default route
app.use("/api/v1", mainRouter);
app.get("/", (req, res) => {
  res.status(200).send({
    message: "App running"
  });
});

app.listen(port, () => console.log(`Server running on port ${port}...`));
