'use client';

import { useState } from 'react';
import { type Option } from '../types';
import Dropdown from './dropdown';

const titleOptions = [
  { label: 'Mr', value: 'Mr' },
  { label: 'Miss', value: 'Miss' },
  { label: 'Mrs', value: 'Mrs' },
  { label: 'Ms', value: 'Ms' }
];

export default function DetailsForm() {
  const [title, setTitle] = useState<Option | null>(null);

  const handleSelect = (option: Option) => {
    setTitle(option);
  };

  return (
    <form className='py-4'>
      <Dropdown options={titleOptions} value={title} onChange={handleSelect} placeholder='Title' />
    </form>
  );
}
