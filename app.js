if (process.env.NODE_ENV != "production") require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connect, connection: db } = require("mongoose");
const error = require("./middlewares/error");

const opt = { useNewUrlParser: true, useUnifiedTopology: true };
connect("mongodb://localhost/foodStore", opt);

const app = express();

app.use(cors());
app.use(express.json());

app.use(error);
db.on("open", () => {
  app.listen(process.env.PORT || 3000, () => {
    console.log("Server started");
  });
});
