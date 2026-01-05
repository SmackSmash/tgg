'use client';

import Image from 'next/image';
import { useAppSelector } from '@/src/store/hooks';
import TopBanner from '@/src/components/top-banner';
import Trust from '@/src/components/trust';
import House from '@/public/house.svg';
import PostcodeSearch from '@/src/components/postcode-search';
import AddressForm from '@/src/components/address-form';

export default function Address() {
  const address = useAppSelector(({ form: { address } }) => address);

  return (
    <main className='px-4 py-2'>
      <TopBanner>22.43 million households in UK could be affected</TopBanner>
      <section className='flex flex-col py-4'>
        <div className='flex items-start gap-6'>
          <div>
            <h1 className='text-2xl font-semibold'>Your Current Address</h1>
            <p className='text-text-color/80 py-1'>
              We need your current address to find your finance agreements
            </p>
          </div>
          <Image src={House} alt='House Icon' />
        </div>
      </section>
      <section className='pt-0.5 pb-6.5'>
        <p className='pb-2.5'>Enter your postcode and tap &lsquo;Search&rsquo;.</p>
        <PostcodeSearch />
        {address && <AddressForm />}
      </section>
      <Trust />
    </main>
  );
}
