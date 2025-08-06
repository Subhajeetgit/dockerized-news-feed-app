import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
            params: {
                country: "in", 
                apiKey: process.env.NEWS_API_KEY,
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch news" });
    }
});

export default router;
