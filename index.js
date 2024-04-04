const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PostRoutes = require("./routes/posts");

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", PostRoutes);

const CONNECTION_URL =
  "mongodb+srv://sabarishharidas:sabarishharidas123@cluster0.e4gukfs.mongodb.net/";
const PORT = process.env.PORT || 8000;

mongoose
  .connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Port Running On : ${PORT}`)))
  .catch((error) => console.log(error.message));
