const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all requests
app.use(cors());

// Dice rolling API: Returns a random number
app.get("/roll", (req, res) => {
    const sides = parseInt(req.query.sides) || 6; // Default to 6-sided dice
    const roll = Math.floor(Math.random() * sides) + 1;
    res.json({ sides, roll });
});

// API to simulate a CORS failure
app.get("/cors-fail", (req, res) => {
    res.set("Access-Control-Allow-Origin", "https://unauthorized-site.com");
    res.json({ message: "This should fail CORS from other domains." });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});