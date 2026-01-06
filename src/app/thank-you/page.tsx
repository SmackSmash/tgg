'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAppSelector } from '@/src/store/hooks';
import { type Option } from '@/src/types';
import { submitClaim } from '@/src/api';
import TopBanner from '@/src/components/top-banner';
import Dropdown from '@/src/components/dropdown';
import RegistrationChecker from '@/src/components/registration-checker';
import StarRating from '@/src/components/star-rating';
import IDUpload from '@/src/components/id-upload-form';
import Party from '@/public/party.svg';
import CourmacsLogo from '@/public/courmacs-logo.svg';
import WhatsAppLogo from '@/public/whatsapp-logo.svg';
import IDIcon from '@/public/id.svg';

const agreementOptions = [
  { label: 'Agreement 1', value: 'Agreement 1' },
  { label: 'Agreement 2', value: 'Agreement 2' },
  { label: 'Agreement 3', value: 'Agreement 3' }
];

export default function ThankYou() {
  const { firstname } = useAppSelector(({ form: { details } }) => details);
  const formData = useAppSelector(({ form }) => form);

  useEffect(() => {
    (async () => {
      const response = await submitClaim(formData);
      console.log(response);
    })();
  }, [formData]);

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
        <video controls preload='none' className='aspect-video'>
          <source src='sample.mp4' type='video/mp4' />{' '}
        </video>
        <h2 className='text-2xl font-semibold'>Help Your Close Ones Claim!</h2>
        <p>Your friends and family may have financed a vehicle before 2021.</p>
        <Link
          href='whatsapp://send?text=PCP Pal'
          className='bg-whatsapp-green font-actor flex justify-center gap-2 rounded-lg py-3 text-2xl text-white'
        >
          <Image src={WhatsAppLogo} alt='WhatsApp Logo' />
          Share on WhatsApp
        </Link>
      </section>
      <section className='border-border-grey border-b py-10'>
        <h2 className='text-2xl font-semibold'>How quick and easy was our website?</h2>
        <p>Leave us a review to help others find out how much they could potentially be owed.</p>
        <StarRating />
      </section>
      <section className='border-border-grey flex flex-col border-b py-4'>
        <div className='flex items-start gap-6'>
          <div>
            <h2 className='text-2xl font-semibold'>Speed Things Up!</h2>
            <p className='text-text-color/80 py-1 text-sm'>
              Speed up your claim by uploading your driving licence (or passport).
            </p>
          </div>
          <Image src={IDIcon} alt='ID Icon' />
        </div>
        <IDUpload />
        <ul className='flex list-image-[url(@/public/check.svg)] flex-col gap-5 px-5 pt-3 pb-4.5'>
          <li className='pl-3'>95% chance their car finance included lender commission.</li>
          <li className='pl-3'>The average claim value is £5,318.25 per vehicle.</li>
        </ul>
        <h2 className='text-2xl font-semibold'>Legal Obligations</h2>
        <ul className='flex list-disc flex-col gap-3.75 pl-4'>
          <li className='text-text-color/80 text-xs leading-5.5'>
            By submitting your details, you have entered a legal claims process. It is important to
            review the confirmation email for more information about what to expect and the next
            steps in this process.
          </li>
          <li className='text-text-color/80 text-xs leading-5.5'>
            Your Claim Value
            <br />
            The average claim value is £5,318.25, with some clients receiving up to £10,446.46.
            However, please note that claim amounts depend on individual circumstances. The values
            mentioned are based on successful past claims.
          </li>
        </ul>
      </section>
    </main>
  );
}
