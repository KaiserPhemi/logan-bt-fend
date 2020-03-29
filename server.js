// node modules
require("dotenv").config();
const express = require("express");
const path = require("path");
const { MongoClient } = require("mongodb");

// router
const mainRouter = require("./app/api/v1");

// instantiate app & decalre constants
const app = express();
const port = parseInt(process.env.PORT, 10);
const dbUrl = process.env.DEV_DB;

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static file path
app.use(express.static(path.join(__dirname, "dist")));

// database connedction
const dbConn = async () => {
  const client = MongoClient(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  try {
    await client.connect(() => console.log("Database connected"));
    await client.db().admin();

    // Make the appropriate DB calls
    // await listDatabases(client);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
};
dbConn().catch(console.error);

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
