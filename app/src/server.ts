const express = require("express");

const app = express();

app.get("/health", (req,res) => {
  res.json({status: "ok"});
});

app.get("/version", (req, res) => {
  res.json({ service: "dfyne-devsecops-lab", version: "1.0.0"});
});

module.exports = app;

if (require.main === module ) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}