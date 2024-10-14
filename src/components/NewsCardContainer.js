import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import './NewsCardContainer.css';

function NewsCardContainer() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Mock fetching news data, replace with your API call
    const fetchNews = async () => {
      try {
        const newsData = [
          {
            id: 1,
            title: 'Breaking News 1',
            description: 'This is a description of breaking news 1.',
            image: 'https://dummyimage.com/600x400/000/fff&text=Breaking+News+1',
            url: 'https://www.example.com/news1',
          },
          {
            id: 2,
            title: 'Breaking News 2',
            description: 'This is a description of breaking news 2.',
            image: 'https://dummyimage.com/600x400/000/fff&text=Breaking+News+2',
            url: 'https://www.example.com/news2',
          },
          {
            id: 3,
            title: 'Breaking News 3',
            description: 'This is a description of breaking news 3.',
            image: 'https://dummyimage.com/600x400/000/fff&text=Breaking+News+3',
            url: 'https://www.example.com/news3',
          },
        ];
        // Replace with real API call:
        // const response = await fetch('https://your-news-api.com');
        // const newsData = await response.json();
        setNews(newsData);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-card-container">
      {news.map((newsItem) => (
        <NewsCard
          key={newsItem.id}
          title={newsItem.title}
          description={newsItem.description}
          image={newsItem.image}
          url={newsItem.url}
        />
      ))}
    </div>
  );
}

export default NewsCardContainer;
