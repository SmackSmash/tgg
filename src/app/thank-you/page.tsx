'use client';

import Image from 'next/image';
import { useAppSelector } from '@/src/store/hooks';
import { type Option } from '@/src/types';
import TopBanner from '@/src/components/top-banner';
import Dropdown from '@/src/components/dropdown';
import RegistrationChecker from '@/src/components/registration-checker';
import Party from '@/public/party.svg';
import CourmacsLogo from '@/public/courmacs-logo.svg';

const agreementOptions = [
  { label: 'Agreement 1', value: 'Agreement 1' },
  { label: 'Agreement 2', value: 'Agreement 2' },
  { label: 'Agreement 3', value: 'Agreement 3' }
];

export default function ThankYou() {
  const { firstname } = useAppSelector(({ form: { details } }) => details);

  const handleSelect = (option: Option) => {
    alert(option.value);
  };

  return (
    <main className='px-4 py-2'>
      <TopBanner>You&rsquo;ve now joined the 1 Million+ drivers helped so far</TopBanner>
      <section className='flex flex-col py-4'>
        <div className='flex items-start gap-6'>
          <div>
            <h1 className='text-2xl font-semibold'>
              Congratulations {firstname} your claim is now submitted.
            </h1>
            <p className='text-text-color/80 py-1'>Your potential claim value is</p>
            <span className='text-cta-green text-2xl text-[32px] font-bold'>£15,954.75*</span>
          </div>
          <Image src={Party} alt='Party Icon' />
        </div>
      </section>
      <Dropdown
        placeholder='3 Agreements Found'
        options={agreementOptions}
        value={{ label: '', value: '' }}
        onChange={handleSelect}
      />
      <h2 className='text-2xl font-semibold'>Feel like we&rsquo;ve missed something?</h2>
      <p>Use the registration checker below to find other agreements you know you&rsquo;ve had.</p>
      <RegistrationChecker />
      <section className='border-border-grey border-y py-10'>
        <h2 className='flex justify-between text-2xl font-semibold'>
          Next Steps
          <Image src={CourmacsLogo} alt='Courmacs Logo' />
        </h2>
        <p>
          Keep an eye out for an email in your inbox as we will shortly be sending you a copy of
          your legal documents. Don&rsquo;t forget to check your junk or spam folder. It has
          important information we need you to review as soon as possible!
        </p>
        <p className='text-xs'>
          Watch this short video, on what the next steps of your journey with Courmacs Legal are.
        </p>
        <iframe
          src='https://www.youtube.com/embed/JLnycPtolfw?si=GJ2twtWssdP684FN'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          className='h-auto w-full'
        ></iframe>
      </section>
    </main>
  );
}
