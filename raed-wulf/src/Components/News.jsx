import React from 'react';
import NewsCard from './NewsCard';
import '../CSS/News.css';

const news = Array.from(Array(10).keys());

export default function News() {
  return (
    <div className="newsContainer">
      <h2>Noticias</h2>
      <div className="newsList">
        {
          news.map(() => <NewsCard />)
        }
      </div>
    </div>
  );
}
