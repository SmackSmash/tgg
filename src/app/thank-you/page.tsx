'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAppSelector } from '@/src/store/hooks';
import { submitClaim } from '@/src/api';
import TopBanner from '@/src/components/top-banner';
import AgreementsMenu from '@/src/components/agreements-menu';
import RegistrationChecker from '@/src/components/registration-checker';
import StarRating from '@/src/components/star-rating';
import IDUpload from '@/src/components/id-upload-form';
import Party from '@/public/party.svg';
import CourmacsLogo from '@/public/courmacs-logo.svg';
import WhatsAppLogo from '@/public/whatsapp-logo.svg';
import IDIcon from '@/public/id.svg';

export default function ThankYou() {
  const [isSubmitting, setIsSubmitting] = useState(true);
  const { firstname } = useAppSelector(({ form: { details } }) => details);
  const formData = useAppSelector(({ form }) => form);

  useEffect(() => {
    (async () => {
      const response = await submitClaim(formData);
      setIsSubmitting(false);
      console.log(response);
    })();
  }, [formData]);

  return (
    <main className='px-4 pt-2 pb-0.5'>
      <TopBanner>You&rsquo;ve now joined the 1 Million+ drivers helped so far</TopBanner>
      {isSubmitting ? (
        <h1 className='pt-15 pb-10 text-center text-2xl'>Submitting claim...</h1>
      ) : (
        <>
          <section className='flex flex-col pt-4 pb-5'>
            <div className='flex items-start gap-6 pb-4'>
              <div>
                <h1 className='pb-1 text-2xl leading-7.75 font-semibold'>
                  Congratulations {firstname} your claim is now submitted.
                </h1>
                <p className='text-text-color/80 pb-1'>Your potential claim value is</p>
                <span className='text-cta-green text-2xl text-[32px] font-bold'>£15,954.75*</span>
              </div>
              <Image src={Party} alt='Party Icon' />
            </div>
            <AgreementsMenu />
          </section>
          <h2 className='pb-1 text-2xl font-semibold'>Feel like we&rsquo;ve missed something?</h2>
          <p className='pb-1.5'>
            Use the registration checker below to find other agreements you know you&rsquo;ve had.
          </p>
          <RegistrationChecker />
          <section className='border-border-grey border-y pt-11 pb-10'>
            <h2 className='flex justify-between pr-7.5 pb-5 text-2xl font-semibold'>
              Next steps
              <Image src={CourmacsLogo} alt='Courmacs Logo' className='-mt-1' />
            </h2>
            <p className='pb-4.5'>
              Keep an eye out for an email in your inbox as we will shortly be sending you a copy of
              your legal documents. Don&rsquo;t forget to check your junk or spam folder. It has
              important information we need you to review as soon as possible!
            </p>
            <p className='text-xs leading-5.5'>
              Watch this short video, on what the next steps of your journey with Courmacs Legal
              are.
            </p>
            <video controls preload='none' className='aspect-video h-52 w-full'>
              <source src='sample.mp4' type='video/mp4' />{' '}
            </video>
            <h2 className='pt-6 pb-1.5 text-2xl font-semibold'>Help Your Close Ones Claim!</h2>
            <p className='pb-4'>Your friends and family may have financed a vehicle before 2021.</p>
            <Link
              href='whatsapp://send?text=PCP Pal'
              className='bg-whatsapp-green font-actor flex w-full justify-center gap-2 rounded-lg py-3 text-2xl text-white'
            >
              <Image src={WhatsAppLogo} alt='WhatsApp Logo' />
              Share on WhatsApp
            </Link>
          </section>
          <section className='border-border-grey border-b pt-9.5 pb-10'>
            <h2 className='pb-4 text-2xl font-semibold'>How quick and easy was our website?</h2>
            <p className='pb-5'>
              Leave us a review to help others find out how much they could potentially be owed.
            </p>
            <StarRating />
          </section>
          <section className='border-border-grey flex flex-col border-b py-10'>
            <div className='flex items-start gap-6 pr-1 pb-3'>
              <div>
                <h2 className='pb-2 text-2xl font-semibold'>Speed Things Up!</h2>
                <p className='text-text-color/80 text-sm'>
                  Speed up your claim by uploading your driving licence (or passport).
                </p>
              </div>
              <Image src={IDIcon} alt='ID Icon' className='pt-1' />
            </div>
            <IDUpload />
            <ul className='flex list-image-[url(@/public/check.svg)] flex-col gap-7 pt-5 pb-6 pl-6'>
              <li className='pl-3'>95% chance their car finance included lender commission.</li>
              <li className='pl-3'>The average claim value is £5,318.25 per vehicle.</li>
            </ul>
            <h2 className='pb-3.75 pl-1 text-2xl font-semibold'>Legal Obligations</h2>
            <ul className='flex list-disc flex-col gap-5.5 pl-5.5'>
              <li className='text-text-color/80 text-xs leading-5.5'>
                By submitting your details, you have entered a legal claims process. It is important
                to review the confirmation email for more information about what to expect and the
                next steps in this process.
              </li>
              <li className='text-text-color/80 text-xs leading-5.5'>
                Your Claim Value
                <br />
                The average claim value is £5,318.25, with some clients receiving up to £10,446.46.
                However, please note that claim amounts depend on individual circumstances.
                <br /> The values mentioned are based on successful past claims.
              </li>
            </ul>
          </section>
        </>
      )}
    </main>
  );
}
