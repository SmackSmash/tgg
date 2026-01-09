import { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { getAgreements } from '../api';
import CTALink from './cta-link';
import GBLogo from '@/public/gb-logo.svg';
import ChevronRight from '@/public/chevron-right.svg';
import FormError from './form-error';
import RadioInput from './radio-input';
import type { Agreement } from '../types';

type FormData = {
  reg: string;
};

export default function RegistrationChecker() {
  const [agreements, setAgreements] = useState<Agreement[]>([]);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { isValid, errors }
  } = useForm<FormData>({
    mode: 'onTouched'
  });

  const onSubmit = async ({ reg }: FormData) => {
    const response = await getAgreements(reg);
    setAgreements(response);
  };

  console.log(getValues());

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='pb-10'>
      <div className='bg-reg-bg rounded-sm px-2 py-2.5'>
        <p className='pb-2'>Enter Vehicle Registration Number</p>
        <div className='bg-reg-yellow relative w-full overflow-hidden rounded-lg pt-4 pb-3 ring-2'>
          <input
            type='text'
            placeholder='ENTER REG'
            maxLength={8}
            {...register('reg', {
              required: 'Please enter a valid reg',
              minLength: { value: 8, message: 'Registration number must be at least 8 characters' }
            })}
            className='font-charleswright w-full text-center text-4xl uppercase outline-0'
          />
          <div className='bg-reg-blue absolute top-0 flex h-full w-10 items-center justify-center'>
            <Image src={GBLogo} alt='GB Logo' />
          </div>
        </div>
        {errors.reg?.message && <FormError>{errors.reg?.message as string}</FormError>}
      </div>
      <div className='mt-1'>
        {!agreements.length ? (
          <CTALink button disabled={!isValid}>
            Search
            <Image src={ChevronRight} alt='Right Arrow Icon' />
          </CTALink>
        ) : (
          agreements.map(({ model, financier, date }, i) => {
            return (
              <div key={i}>
                <RadioInput />
                <p>{model}</p>
                <p>{financier}</p>
                <p>{date}</p>
              </div>
            );
          })
        )}
      </div>
    </form>
  );
}
