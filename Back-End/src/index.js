const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

dotenv.config({
  path: "./.env",
});

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Connection Failed");
  });

app.use("/", require("./routes/route"));

app.listen(
  process.env.PORT,
  console.log(`App Is Running On Port ${process.env.PORT}`)
);
