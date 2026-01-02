'use client';

import { type ChangeEvent } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import { addContact } from '@/src/store';
import CTALink from '@/src/components/cta-link';
import TextInput from '@/src/components/text-input';
import FormError from '@/src/components/form-error';
import SearchIcon from '@/public/search.svg';

export default function ContactForm() {
  const contact = useAppSelector(({ form: { contact } }) => contact);
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { isValid, errors }
  } = useForm({ mode: 'onTouched' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(addContact({ ...contact, [e.target.name]: e.target.value }));
  };

  return (
    <form className='flex flex-col gap-1 pt-4.5'>
      <h2 className='text-2xl font-semibold'>Your Mobile Number</h2>
      <p className='pb-1'>For example: 07123456789</p>
      <TextInput
        placeholder='Enter Mobile Number'
        value={contact.phone || ''}
        secure
        {...register('phone', {
          onChange: handleChange,
          required: 'Please enter your phone number'
        })}
      />
      {errors.phone?.message && <FormError>{errors.phone.message as string}</FormError>}
      <h2 className='pt-4 text-2xl font-semibold'>Your Email Address</h2>
      <p className='pb-1.5'>For example: John@example.co.uk</p>
      <div className='flex w-full flex-col pb-4'>
        <TextInput
          placeholder='Enter Email Address'
          value={contact.email || ''}
          secure
          email
          {...register('email', {
            onChange: handleChange,
            required: 'Please enter your email address'
          })}
        />
        {errors.email?.message && <FormError>{errors.email.message as string}</FormError>}
      </div>
      <CTALink href='/signature' disabled={!isValid}>
        <Image src={SearchIcon} alt='Search Icon' />
        Find My Agreements
      </CTALink>
    </form>
  );
}
