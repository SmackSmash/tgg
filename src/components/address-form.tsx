import { type ChangeEvent } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import { addAddress } from '@/src/store';
import TextInput from '@/src/components/text-input';
import FormError from '@/src/components/form-error';
import CTALink from '@/src/components/cta-link';
import ChevronRight from '@/public/chevron-right.svg';

export default function AddressForm() {
  const address = useAppSelector(({ form: { address } }) => address);
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { isValid, errors }
  } = useForm({ mode: 'onTouched' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(addAddress({ ...address, [e.target.name]: e.target.value }));
  };

  return (
    <form className='flex flex-col gap-5 py-4'>
      <TextInput
        placeholder='Address Line 1'
        value={address!.line1}
        {...register('line1', {
          onChange: handleChange,
          required: 'Please enter a valid address'
        })}
      />
      {errors.line1?.message && <FormError>{errors.line1.message as string}</FormError>}
      <TextInput
        placeholder='Address Line 2'
        value={address?.line2 || ''}
        {...register('line2', {
          onChange: handleChange
        })}
      />
      <TextInput
        placeholder='Town/City'
        value={address!.town}
        {...register('town', {
          onChange: handleChange,
          required: 'Please enter a valid town'
        })}
      />
      {errors.town?.message && <FormError>{errors.town.message as string}</FormError>}
      <TextInput
        placeholder='County'
        value={address!.county}
        {...register('county', {
          onChange: handleChange,
          required: 'Please enter a valid county'
        })}
      />
      {errors.county?.message && <FormError>{errors.county.message as string}</FormError>}
      <p>Please check the details above are correct before continuing.</p>
      <CTALink href='/personal-details' disabled={!isValid}>
        Next
        <Image src={ChevronRight} alt='Right Arrow Icon' />
      </CTALink>
    </form>
  );
}
