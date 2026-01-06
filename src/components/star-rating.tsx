import { useState } from 'react';

export default function StarRating() {
  const [stars, setStars] = useState(Array(5).fill('unselected'));

  const handleClick = (index: number) => {
    setStars(stars.map((_star, i) => (i <= index ? 'selected' : 'unselected')));
  };

  return (
    <div className='border-border-grey flex flex-col items-center gap-4 border p-3'>
      <h3 className='text-xl'>Select A Star To Leave A Review</h3>
      <div className='flex items-center gap-2.5'>
        {stars.map((star, i) => (
          <button key={i} onClick={() => handleClick(i)} className='cursor-pointer'>
            {star === 'unselected' ? (
              <svg
                width='46'
                height='46'
                viewBox='0 0 46 46'
                fill='#F2F2F2'
                xmlns='http://www.w3.org/2000/svg'
                className='active:stroke-star-yellow/50 active:fill-star-yellow active:stroke-2'
              >
                <path d='M23 0L28.1638 15.8926H44.8743L31.3552 25.7148L36.5191 41.6074L23 31.7852L9.48094 41.6074L14.6448 25.7148L1.1257 15.8926H17.8362L23 0Z' />
              </svg>
            ) : (
              <svg
                width='46'
                height='46'
                viewBox='0 0 46 46'
                fill='#FDD515'
                xmlns='http://www.w3.org/2000/svg'
                className='active:stroke-star-yellow/50 active:stroke-2'
              >
                <path d='M23 0L28.1638 15.8926H44.8743L31.3552 25.7148L36.5191 41.6074L23 31.7852L9.48094 41.6074L14.6448 25.7148L1.1257 15.8926H17.8362L23 0Z' />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
