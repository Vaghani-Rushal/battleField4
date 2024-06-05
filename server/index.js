require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

require("./config/mongodb");
const createError = require("http-errors");
const bodyParser = require("body-parser");
app.use(express.json());

var cors = require("cors");
app.use(cors());

app.all("/", (req, res) => {
  res.send("BattleField4 running successfully with server.");
});

app.use("/api", require("./routes/index"));

app.use(async (req, res, next) => {
  const err = createError.BadRequest("URL not found");
  next(err);
});

app.use((err, req, res, next) => {
  console.log("error", err);
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
