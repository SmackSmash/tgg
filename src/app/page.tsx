import Image from 'next/image';
import TopBanner from '@/src/components/top-banner';
import CTALink from '@/src/components/cta-link';
import Trust from '@/src/components/trust';
import Lenders from '@/src/components/lenders';
import SearchIcon from '@/public/search.svg';

export default function Home() {
  return (
    <>
      <main className='px-4 py-2'>
        <TopBanner>1,000,000+ drivers helped so far</TopBanner>
        <h1 className='pt-4 pb-2.5 text-[32px] leading-9.5 font-bold'>
          You could be owed up to &pound;5,318.25* per car finance agreement.
        </h1>
        <p className='pb-5'>
          Check in under 60 seconds to see if you&apos;re owed compensation. Use the free agreement
          finder to start your claim.
        </p>
        <CTALink href='/address' ring>
          <Image src={SearchIcon} alt='Search Icon' />
          Find My Agreements
        </CTALink>
        <Trust />
        <ul className='flex list-image-[url(@/public/check.svg)] flex-col gap-5 px-11 pt-3 pb-4.5'>
          <li className='pl-3'>
            Check in under <strong>60 seconds</strong>
          </li>
          <li className='pl-3'>
            <strong>Free</strong> agreement finder
          </li>
          <li className='pl-3'>
            <strong>1 Million+</strong> drivers signed up
          </li>
        </ul>
      </main>
      <Lenders />
    </>
  );
}
