
import React from 'react';

const NewsCard = ({ title, description, url, urlToImage }) => {
  return (
    <div className="news-card">
      <img src={urlToImage} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">Read more</a>
    </div>
  );
};

export default NewsCard;
