'use client';

import type { FormEvent, ChangeEvent } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import { addContact } from '@/src/store';
import CTALink from '@/src/components/cta-link';
import TextInput from '@/src/components/text-input';
import FormError from '@/src/components/form-error';
import SearchIcon from '@/public/search.svg';

const contactSchema = z.object({
  email: z.email('Invalid email address').min(1, 'Email is required'),

  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(
      /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/,
      'Invalid phone number'
    )
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const contact = useAppSelector(({ form: { contact } }) => contact);
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { isValid, errors }
  } = useForm<ContactFormData>({ mode: 'onTouched', resolver: zodResolver(contactSchema) });
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/signature');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(addContact({ ...contact, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-1 pt-4.5 pb-7.5'>
      <h2 className='text-2xl font-semibold'>Your Mobile Number</h2>
      <p className='pb-1'>For example: 07123456789</p>
      <TextInput
        placeholder='Enter Mobile Number'
        isValid={!errors.phone}
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
          isValid={!errors.email}
          secure
          email
          {...register('email', {
            onChange: handleChange,
            required: 'Please enter your email address'
          })}
        />
        {errors.email?.message && <FormError>{errors.email.message as string}</FormError>}
      </div>
      <CTALink button disabled={!isValid}>
        <Image src={SearchIcon} alt='Search Icon' />
        Find My Agreements
      </CTALink>
    </form>
  );
}
