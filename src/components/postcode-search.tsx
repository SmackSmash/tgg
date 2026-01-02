'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { type FieldValues, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import { addPostcode, addAddress } from '@/src/store';
import TextInput from './text-input';
import { getAddress } from '@/src/api';

export default function PostcodeSearch() {
  const postcode = useAppSelector(({ form: { postcode } }) => postcode);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors }
  } = useForm();
  const [isPending, setIsPending] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(addPostcode(e.target.value));
  };

  const onSubmit = async () => {
    setIsPending(true);
    const returnedAddress = await getAddress(postcode);
    setIsPending(false);
    dispatch(addAddress(returnedAddress));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='py-1'>
      <p className='pb-2'>Enter your postcode and tap &lsquo;Search&rsquo;.</p>
      <div className='flex items-center gap-4'>
        <TextInput
          placeholder='Postcode'
          value={postcode}
          {...register('postcode', {
            onChange: handleChange,
            required: 'Please enter a valid postcode',
            minLength: { value: 5, message: 'Postcode must be at least 5 characters' }
          })}
        />
        <button
          disabled={!isValid || isPending}
          className='bg-cta-red disabled:bg-cta-disabled flex cursor-pointer rounded-full px-10.25 py-1.75 text-[15px] font-semibold text-white'
        >
          Search
        </button>
      </div>
      {errors.postcode?.message && <p>{errors.postcode.message}</p>}
    </form>
  );
}
