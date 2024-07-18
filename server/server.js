const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
var cors = require("cors");
require("dotenv").config();

const users = require("./routes/users");

const app = express();

app.use(cors({ origin: "*" }));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB settings
const db = process.env.MONGO_URI;

mongoose
  //  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .connect(db, {})
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// EXPRESS settings

app.use("/api", users);

const port = process.env.PORT || 5444;

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  console.log("production:");
  console.log(port);
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Server running on port ${port}`));
