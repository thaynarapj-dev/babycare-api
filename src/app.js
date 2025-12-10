const express = require("express");
const cors = require("cors");
const babyRoutes = require("./routes/baby.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/babies", babyRoutes);

module.exports = app;
