import Image from 'next/image';
import GBLogo from '@/public/gb-logo.svg';

export default function RegistrationChecker() {
  return (
    <form className='bg-reg-bg rounded-sm p-1'>
      <p>Enter Vehicle Registration Number</p>
      <div className='bg-reg-yellow relative w-full overflow-hidden rounded-lg border-2 pt-4 pb-3'>
        <input
          type='text'
          maxLength={8}
          className='font-charleswright w-full text-center text-4xl uppercase outline-0'
        />
        <div className='bg-reg-blue absolute top-0 flex h-full w-10 items-center justify-center'>
          <Image src={GBLogo} alt='GB Logo' />
        </div>
      </div>
    </form>
  );
}
