'use client';

import type { FormEvent, ChangeEvent } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import { addDetails } from '@/src/store';
import { type Option } from '@/src/types';
import Dropdown from '@/src/components/dropdown';
import TextInput from '@/src/components/text-input';
import FormError from '@/src/components/form-error';
import CTALink from '@/src/components/cta-link';
import NumberInput from '@/src/components/number-input';
import ChevronRight from '@/public/chevron-right.svg';

const titleOptions = [
  { label: 'Mr', value: 'Mr' },
  { label: 'Miss', value: 'Miss' },
  { label: 'Mrs', value: 'Mrs' },
  { label: 'Ms', value: 'Ms' }
];

export default function DetailsForm() {
  const details = useAppSelector(({ form: { details } }) => details);
  const dispatch = useAppDispatch();
  const {
    control,
    register,
    formState: { isValid, errors }
  } = useForm({
    mode: 'onTouched'
  });
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/contact-information');
  };

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

  return (
    <form onSubmit={handleSubmit} className='flex flex-col pt-4'>
      <div className='w-fit pb-5'>
        <Controller
          name='title'
          control={control}
          rules={{ required: 'Title is required' }}
          render={({ field }) => (
            <Dropdown
              placeholder='Title'
              options={titleOptions}
              value={field.value ? { label: field.value, value: field.value } : null}
              isValid={!errors.title}
              onChange={(option: Option) => {
                field.onChange(option.value);
                handleSelect(option);
              }}
              onBlur={field.onBlur}
            />
          )}
        />
        {errors.title?.message && <FormError>{errors.title.message as string}</FormError>}
      </div>
      <div className='flex flex-col pb-5'>
        <TextInput
          placeholder='First Name'
          isValid={!errors.firstname}
          {...register('firstname', {
            onChange: handleChange,
            required: 'Please enter a valid first name'
          })}
        />
        {errors.firstname?.message && <FormError>{errors.firstname.message as string}</FormError>}
      </div>
      <div className='flex flex-col pb-5'>
        <TextInput
          placeholder='Surname'
          isValid={!errors.surname}
          {...register('surname', {
            onChange: handleChange,
            required: 'Please enter a valid surname'
          })}
        />
        {errors.surname?.message && <FormError>{errors.surname.message as string}</FormError>}
      </div>
      <div>
        <p className='pb-1.5'>Date of Birth</p>
        <div className='pb-5'>
          <div className='flex gap-5'>
            <div className='min-w-0'>
              <NumberInput
                placeholder='DD'
                isValid={!errors.day}
                {...register('day', {
                  onChange: handleChange,
                  required: true,
                  min: 1,
                  max: 31
                })}
              />
            </div>
            <div className='min-w-0'>
              <NumberInput
                placeholder='MM'
                isValid={!errors.month}
                {...register('month', {
                  onChange: handleChange,
                  required: true,
                  min: 1,
                  max: 12
                })}
              />
            </div>
            <div className='min-w-0'>
              <NumberInput
                placeholder='YYYY'
                isValid={!errors.year}
                {...register('year', {
                  onChange: handleChange,
                  required: true,
                  min: 1900,
                  max: 3000
                })}
              />
            </div>
          </div>
          {(errors.day || errors.month || errors.year) && (
            <FormError>Please enter a valid date</FormError>
          )}
        </div>
      </div>
      <CTALink button disabled={!isValid}>
        Next
        <Image src={ChevronRight} alt='Right Arrow Icon' />
      </CTALink>
    </form>
  );
}
