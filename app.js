const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

const app = express();

const corsOption = {
  origins: "*",
  methods: "*",
};

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors(corsOption));

app.use("/api/v1", productRouter);
app.use("/api/v1", userRouter);

module.exports = app;
