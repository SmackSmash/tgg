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
  const [selection, setSelection] = useState<Option | null>(null);

  const handleSelect = (option: Option) => {
    setSelection(option);
  };

  return (
    <form className='py-4'>
      <Dropdown
        options={titleOptions}
        value={selection}
        onChange={handleSelect}
        placeholder='Title'
      />
    </form>
  );
}
