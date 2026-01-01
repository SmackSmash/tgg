'use client';

import { type ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addDetails } from '../store';
import { type Option } from '../types';
import Dropdown from './dropdown';
import TextInput from './text-input';

const titleOptions = [
  { label: 'Mr', value: 'Mr' },
  { label: 'Miss', value: 'Miss' },
  { label: 'Mrs', value: 'Mrs' },
  { label: 'Ms', value: 'Ms' }
];

export default function DetailsForm() {
  const details = useAppSelector(({ form: { details } }) => details);
  const dispatch = useAppDispatch();

  const handleSelect = (option: Option) => {
    dispatch(addDetails({ ...details, title: option.value }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(addDetails({ ...details, [e.target.name]: e.target.value }));
  };

  const { title, firstname, surname } = details;

  return (
    <form className='flex flex-col gap-4 py-4'>
      <Dropdown
        options={titleOptions}
        value={{ label: title, value: title }}
        onChange={handleSelect}
        placeholder='Title'
      />
      <TextInput
        placeholder='First Name'
        name='firstname'
        value={firstname}
        onChange={handleChange}
        required
      />
      <TextInput
        placeholder='Surname'
        name='surname'
        value={surname}
        onChange={handleChange}
        required
      />
    </form>
  );
}
