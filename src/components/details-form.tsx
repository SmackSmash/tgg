'use client';

import { type ChangeEvent } from 'react';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addDetails } from '../store';
import { type Option } from '../types';
import Dropdown from './dropdown';
import TextInput from './text-input';
import CTALink from './cta-link';
import ChevronRight from '@/public/chevron-right.svg';
import NumberInput from './number-input';

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
    if (e.target.name === 'day' || e.target.name === 'month' || e.target.name === 'year') {
      return dispatch(
        addDetails({ ...details, dob: { ...details.dob, [e.target.name]: Number(e.target.value) } })
      );
    }
    dispatch(addDetails({ ...details, [e.target.name]: e.target.value }));
  };

  const {
    title,
    firstname,
    surname,
    dob: { day, month, year }
  } = details;

  return (
    <form className='flex flex-col gap-5 pt-4'>
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
      <div>
        <p className='pb-1.5'>Date of Birth</p>
        <div className='flex gap-5'>
          <div className='min-w-0'>
            <NumberInput placeholder='DD' name='day' value={day} onChange={handleChange} required />
          </div>
          <div className='min-w-0'>
            <NumberInput
              placeholder='MM'
              name='month'
              value={month}
              onChange={handleChange}
              required
            />
          </div>
          <div className='min-w-0'>
            <NumberInput
              placeholder='YYYY'
              name='year'
              value={year}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      <CTALink
        href='/contact-information'
        disabled={!title || !firstname || !surname || !day || !month || !year}
      >
        Next
        <Image src={ChevronRight} alt='Right Arrow Icon' />
      </CTALink>
    </form>
  );
}
