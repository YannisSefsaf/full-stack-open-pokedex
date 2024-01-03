const express = require("express");
const path = require("path");
const app = express();

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000;

// Serve static files from the 'dist' directory
app.use(express.static("dist"));

// Health check endpoint
app.get("/health", (req, res) => {
  throw "error...";
  // eslint-disable-next-line no-unreachable
  res.send("ok");
});

// Version endpoint
app.get("/version", (req, res) => {
  res.send("1"); // Increment this number with each new deployment
});

// Catch-all route for serving the main index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
