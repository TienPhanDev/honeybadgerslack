const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/payloads", (req, res) => {
  axios.post("url", "Email address")
  res.send("JSON payload hit POST endpoint successfully");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
