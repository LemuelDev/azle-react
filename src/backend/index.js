const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

// Enable CORS for all routes
app.use(cors());

// Parse incoming JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use the router for /api routes
app.use("/api", require("./Routes/router"));

// Set port from environment variable or fallback to 3000
const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
app.get("/test", (req, res) => {
  res.send("Hello World!");
});

// Basic error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
