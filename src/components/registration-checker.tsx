import Image from 'next/image';
import { useForm } from 'react-hook-form';
import CTALink from './cta-link';
import GBLogo from '@/public/gb-logo.svg';
import ChevronRight from '@/public/chevron-right.svg';

export default function RegistrationChecker() {
  const {
    register,
    formState: { isValid, errors }
  } = useForm({
    mode: 'onTouched'
  });

  return (
    <form>
      <div className='bg-reg-bg rounded-sm p-1'>
        <p>Enter Vehicle Registration Number</p>
        <div className='bg-reg-yellow relative w-full overflow-hidden rounded-lg border-2 pt-4 pb-3'>
          <input
            type='text'
            maxLength={8}
            {...register('reg', {
              required: 'Please enter a valid reg',
              minLength: 8
            })}
            className='font-charleswright w-full text-center text-4xl uppercase outline-0'
          />
          <div className='bg-reg-blue absolute top-0 flex h-full w-10 items-center justify-center'>
            <Image src={GBLogo} alt='GB Logo' />
          </div>
        </div>
      </div>
      <CTALink button disabled={!isValid}>
        Search
        <Image src={ChevronRight} alt='Right Arrow Icon' />
      </CTALink>
    </form>
  );
}
