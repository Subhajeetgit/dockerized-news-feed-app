// src/App.js

import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

function App() {
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/news")
      .then((res) => {
        // Adjust based on actual backend format
        setHeadlines(res.data.articles || res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching news:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app-container">
      <h1 className="app-title">Top News Headlines</h1>
      {loading ? (
        <div className="loading-text">Loading...</div>
      ) : (
        <div className="news-grid">
          {headlines.map((headline, index) => (
            <div key={index} className="news-card">
              <h2 className="news-title">{headline.title}</h2>
              <p className="news-description">
                {headline.description || "No description available."}
              </p>
              {headline.url && (
                <a
                  href={headline.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-more-link"
                >
                  Read more →
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
