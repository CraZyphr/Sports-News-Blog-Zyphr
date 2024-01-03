import Link from 'next/link';
import React from 'react';

function InfoBlock({ data }) {
  const { title, content, imgSrc ,button} = data;

  // Slice title to 10 words
  const slicedTitle = title.split(' ').slice(0, 10).join(' ');

  // Slice content to 35 words, or use the original content if it's not a string
  const slicedContent = typeof content === 'string' ? content.split(' ').slice(0, 30).join(' ') : content;

  // Add ellipsis to sliced title and content
  const ellipsis = '...';
  const ellipsisTitle = slicedTitle.length < title.length ? slicedTitle + ellipsis : slicedTitle;
  const ellipsisContent = slicedContent.length < content.length ? slicedContent + ellipsis : slicedContent;
   
  return (
    <Link href= {`/${data.slug}`}> 
    <div className="info">
      <div className="blog-card">
        <div className="meta">
          <div className="photo">
            <div>
              <img
                src={imgSrc}
                alt=""
                className="image-resize" 
              />
            </div>
          </div>
        </div>
        <div className="description">
          <h1>{ellipsisTitle}</h1>
          <p>
            {ellipsisContent} {content.length > slicedContent.length && <span>...</span>}
          </p>
          <div className='butt'>{button}</div>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default InfoBlock;
