import { type ChangeEvent } from 'react';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addAddress } from '../store';
import TextInput from './text-input';
import CTALink from './cta-link';
import ChevronRight from '@/public/chevron-right.svg';

export default function AddressForm() {
  const address = useAppSelector(({ form: { address } }) => address);
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(addAddress({ ...address, [e.target.name]: e.target.value }));
  };

  return (
    <form className='flex flex-col gap-5 py-4'>
      {Object.keys(address!).map(key => (
        <TextInput
          key={key}
          value={address![key as keyof typeof address]}
          onChange={handleChange}
          name={key}
        />
      ))}
      <p>Please check the details above are correct before continuing.</p>
      <CTALink
        href='/personal-details'
        disabled={!address!.line1 || !address!.town || !address!.county}
      >
        Next
        <Image src={ChevronRight} alt='Right Arrow Icon' />
      </CTALink>
    </form>
  );
}
