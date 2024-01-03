import Link from 'next/link';
import React from 'react'

function RecentTrending({recenthighlightData}) {
  if (!Array.isArray(recenthighlightData)) {
    // Handle the case where recenthighlightData is not an array (e.g., set a default value)
    recenthighlightData = [];
  }

  // Function to slice text to a specified number of words
  const sliceText = (text, numWords) => {
    const words = text.split(' ');
    return words.slice(0, numWords).join(' ') + (words.length > numWords ? '...' : '');
  };

  return (
    <div className='highlight'>
      <h1 style={{
        width: '90%',
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '20px 4px',
        fontFamily: "system-ui"
      }}>TRENDING HIGHLIGHTS</h1>
      <div className="bandH">
        {recenthighlightData.map((data, index) => (
          <div key={index} className={`item-${index + 1}`}>
            <Link href= {`/recent-news/${data.slug}`} className="cardH">
              <div className="thumbH">
                <img
                  src={data.imgSrc}
                  alt=""
                  className="image-resizeH"
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
  )
}

export default RecentTrending