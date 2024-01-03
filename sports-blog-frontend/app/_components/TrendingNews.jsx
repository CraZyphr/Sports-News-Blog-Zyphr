import Link from 'next/link';
import React from 'react';

function TrendingNews({ trendingData }) {
  // Check if trendingData is not an array
  if (!Array.isArray(trendingData)) {
    // Handle the case where trendingData is not an array (e.g., set a default value)
    trendingData = [];
  }

  // Function to slice text to a specified number of words
  const sliceText = (text, numWords) => {
    const words = text.split(' ');
    return words.slice(0, numWords).join(' ') + (words.length > numWords ? '...' : '');
  };
  

  return (
    <div className='trending'>
      <h1 style={{
        width: '90%',
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '20px 4px',
        fontFamily: "system-ui"
      }}>TRENDING NEWS</h1>
      <div className="band">
        {trendingData.map((data, index) => (
          <div key={index} className={`item-${index + 1}`}>
            <Link href= {`/news/${data.slug}`} className="card">
              <div className="thumb">
              <img
                  src={data.imgSrc}
                  alt=""
                  className="image-resize"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

              </div>
              <div>
                <h1>{sliceText(data.title, 10)}</h1>
                <p style={{ fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif" }}>
                  {sliceText(data.content, 20)}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingNews;
