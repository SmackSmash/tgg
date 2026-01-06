'use client';

import { useState, type ChangeEvent } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import { addPostcode, addAddress } from '@/src/store';
import TextInput from '@/src/components/text-input';
import FormError from '@/src/components/form-error';
import LoadingSpinner from './loading-spinner';
import { getAddress } from '@/src/api';

const postcodeSchema = z.object({
  postcode: z
    .string()
    .min(5, 'Postcode must be at least 5 characters')
    .max(8, 'Postcode must be less than 9 characters')
    .regex(
      /^(GIR 0AA|(?:[A-Za-z]{1,2}\d[A-Za-z\d]?) ?\d[A-Za-z]{2})$/,
      'Please enter a valid UK postcode'
    )
});

type PostcodeFormData = z.infer<typeof postcodeSchema>;

export default function PostcodeSearch() {
  const postcode = useAppSelector(({ form: { postcode } }) => postcode);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors }
  } = useForm<PostcodeFormData>({ mode: 'onTouched', resolver: zodResolver(postcodeSchema) });
  const [isPending, setIsPending] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(addPostcode(e.target.value));
  };

  const onSubmit = async () => {
    setIsPending(true);
    const returnedAddress = await getAddress(postcode!);
    setIsPending(false);
    dispatch(addAddress(returnedAddress));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='pb-1'>
      <div className='flex items-center gap-4'>
        <TextInput
          placeholder='Postcode'
          isValid={!errors.postcode}
          maxLength={8}
          {...register('postcode', {
            onChange: handleChange,
            required: 'Please enter a valid postcode',
            minLength: { value: 5, message: 'Postcode must be at least 5 characters' },
            maxLength: { value: 8, message: 'Postcode must be less than 9 characters' }
          })}
        />
        <button
          disabled={!isValid || isPending}
          className='bg-cta-red disabled:bg-cta-disabled flex w-42 cursor-pointer justify-center rounded-full py-1.75 text-[15px] font-semibold text-white outline-0'
        >
          {isPending ? <LoadingSpinner /> : 'Search'}
        </button>
      </div>
      {errors.postcode?.message && <FormError>{errors.postcode.message as string}</FormError>}
    </form>
  );
}
