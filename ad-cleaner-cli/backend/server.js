const express = require("express");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const app = express();
const PORT = 3000;

// Serve static dashboard files
app.use("/dashboard", express.static(path.join(__dirname, "dist"))); // Adjust for your frontend build

// API: return cleaned AD users
app.get("/api/users", (req, res) => {
  const jsonPath = path.join(__dirname, "output", "cleaned_users.json"); // Replace your fetch("/output/cleaned_users.json") with: fetch("/api/users")



  fs.readFile(jsonPath, "utf-8", (err, data) => {
    if (err) return res.status(500).json({ error: "File not found." });
    res.json(JSON.parse(data));
  });
});

// Trigger AD sync on request (calls PowerShell + Node)
app.post("/sync", (req, res) => {
  exec("powershell -File ./export_users.ps1 && node cleanAD.js", (error, stdout, stderr) => {
    if (error) {
      console.error(stderr);
      return res.status(500).json({ error: "Sync failed." });
    }
    res.json({ message: "✅ Synced AD data." });
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
