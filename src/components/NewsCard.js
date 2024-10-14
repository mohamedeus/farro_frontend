import React from 'react';
import './NewsCard.css';

function NewsCard({ title, description, image, url }) {
  return (
    <div className="news-card">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className="news-card-image" />
      </a>
      <h3 className="news-card-title">{title}</h3>
      <p className="news-card-description">{description}</p>
    </div>
  );
}

export default NewsCard;
