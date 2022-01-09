"use strict";

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());

// routes
app.use("/api/search", require("./routes/searchResults.js"));

// Handle Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(`${__dirname}/public`));
}

const PORT = process.env.PORT || 3000;
app.listen(PORT);
