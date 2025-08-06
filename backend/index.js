// backend/index.js or server.js

import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/api/news", async (req, res) => {
  try {
    const response = await axios.get(
      `https://gnews.io/api/v4/top-headlines?lang=en&country=in&max=10&apikey=${process.env.GNEWS_API_KEY}`
    );
    res.json(response.data);
  } catch (err) {
    console.error("Error fetching news from GNews:", err.message);
    res.status(500).json({ message: "Failed to fetch news" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
