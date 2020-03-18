// node modules
require("dotenv").config();
const express = require("express");

// instantiate app & decalre constants
const app = express();
const port = parseInt(process.env.PORT, 10);

// default route
app.get("/", (req, res) => {
  res.send({
    message: "App running"
  });
});

app.listen(port, () => console.log(`Server running on port ${port}...`));
