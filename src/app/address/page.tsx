'use client';

import Image from 'next/image';
import { useAppSelector } from '../../store/hooks';
import TopBanner from '../../components/top-banner';
import Trust from '@/src/components/trust';
import House from '@/public/house.svg';
import PostcodeSearch from '@/src/components/postcode-search';

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
      <PostcodeSearch />
      {address && address.line1}
      <Trust />
    </main>
  );
}
