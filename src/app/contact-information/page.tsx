'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/src/store/hooks';
import Image from 'next/image';
import TopBanner from '@/src/components/top-banner';
import ContactForm from '@/src/components/contact-form';
import Trust from '@/src/components/trust';
import Envelope from '@/public/envelope.svg';

export default function ContactInformation() {
  const { postcode } = useAppSelector(({ form: postcode }) => postcode);
  const router = useRouter();

  useEffect(() => {
    if (!postcode) router.push('/address');
  }, [postcode, router]);

  return (
    <main className='px-4 py-2'>
      <TopBanner>32.62 million drivers at risk of losing out on compensation</TopBanner>
      <section className='border-border-grey flex flex-col border-b py-4'>
        <div className='flex items-end gap-6'>
          <div>
            <h1 className='text-2xl font-semibold'>Enter Mobile Number and Email Address</h1>
            <p className='text-text-color/80 py-1'>
              We will use these details to cross reference any car finance agreements you&apos;ve
              had.
            </p>
          </div>
          <Image src={Envelope} alt='Envelope and Phone' />
        </div>
      </section>
      <ContactForm />
      <Trust />
      <p className='text-text-color/80 pt-5 pl-2.25 text-[11px] leading-5 font-light'>
        By clicking &apos;Find My Agreements&apos;, you agree to the Courmacs Legal Privacy Policy,
        consent to receiving marketing communications, and acknowledge that we will run a soft
        credit check (powered by Valid8 IP Ltd) to identify any potential car finance claims. These
        searches will not impact your credit score, but will verify any claims found.
      </p>
    </main>
  );
}
