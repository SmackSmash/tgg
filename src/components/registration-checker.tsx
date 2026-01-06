import Image from 'next/image';
import { useForm } from 'react-hook-form';
import CTALink from './cta-link';
import GBLogo from '@/public/gb-logo.svg';
import ChevronRight from '@/public/chevron-right.svg';
import FormError from './form-error';

export default function RegistrationChecker() {
  const {
    register,
    formState: { isValid, errors }
  } = useForm({
    mode: 'onTouched'
  });

  return (
    <form onSubmit={e => e.preventDefault()} className='pb-10'>
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
        <CTALink button disabled={!isValid}>
          Search
          <Image src={ChevronRight} alt='Right Arrow Icon' />
        </CTALink>
      </div>
    </form>
  );
}
