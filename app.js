const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

function hasSpam(payload) {
  if ("Type" in payload && payload.Type.includes("Spam")) {
    return true;
  }
  if ("Name" in payload && payload.Name.includes("Spam")) {
    return true;
  }
  return false;
}

app.use(bodyParser.json());

app.post("/payloads", (req, res) => {
  const json_data = req.body;
  if (hasSpam(json_data)) {
    // Send alert to Slack channel
    const slack_webhook_url =
      "https://hooks.slack.com/services/your_slack_webhook_url";
    const slack_data = {
      email: `Email address: ${JSON.stringify(json_data.Email)}`,
    };
    axios.post(slack_webhook_url, slack_data);
  }

  // Gracefully handle else cases
  res.send("JSON payload processed successfully");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
