const express = require("express");
const path = require("path");
const app = express();

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000;

// Serve static files from the 'dist' directory
app.use(express.static("dist"));

// Add a catch-all route that sends back the index.html file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
