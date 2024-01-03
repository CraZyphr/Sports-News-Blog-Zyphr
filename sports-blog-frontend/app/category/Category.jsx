import React from 'react';

export default function Category({categoryData}) {

  if (!Array.isArray(categoryData)) {
    // Handle the case where heroData is not an array (e.g., set a default value)
    categoryData = [];
  }
  const sliceText = (text, numWords) => {
    const words = text.split(' ');
    return words.slice(0, numWords).join(' ') + (words.length > numWords ? '...' : '');
  };
  return (
    <main>
      <h1 style={{ width: '90%', maxWidth: '1240px', margin: '0 auto', padding: '20px 4px', fontFamily: "system-ui" }}>CATEGORIES</h1>
      <section className="blogSection section">
        <div className="container">
          <div className="band">
          {categoryData.map((data, index) => (
              <div key={index} className={`item-${index+1}`}>
                <a href="#" className="card" target="_blank">
                  <div className="thumb" >
                  <img
                  src={data.imgSrc}
                  alt=""
                  className="image-resize my-image"
                  style={{ width: '100%', height: '140%', objectFit: 'cover' }}
                />
                  </div>
                  <article>
                  <article  style={{paddingTop:"15%"}} >
                  <h1  style={{fontSize:"30px"}} >{sliceText(data.title, 10)}</h1>
                  <p style={{fontSize:"15px"}} >{sliceText(data.content, 20)}</p>
                  {/* {<button >{button}</button>} */}
                </article>
                  </article>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
