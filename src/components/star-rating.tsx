import { useState } from 'react';
import Image from 'next/image';
import StarUnselected from '@/public/star-unselected.svg';
import StarActive from '@/public/star-active.svg';
import StarSelected from '@/public/star-selected.svg';

export default function StarRating() {
  const [stars, setStars] = useState([
    'unselected',
    'unselected',
    'unselected',
    'unselected',
    'unselected'
  ]);

  const handleClick = (index: number) => {
    setStars(stars.map((_star, i) => (i <= index ? 'selected' : 'unselected')));
  };

  return (
    <div className='border-border-grey flex flex-col items-center gap-4 border p-2'>
      <h3 className='text-2xl'>Select a star to leave a review</h3>
      <div className='flex items-center'>
        {stars.map((star, i) => (
          <button key={i} className='cursor-pointer' onClick={() => handleClick(i)}>
            <Image src={star === 'unselected' ? StarUnselected : StarSelected} alt='star' />
          </button>
        ))}
      </div>
    </div>
  );
}
