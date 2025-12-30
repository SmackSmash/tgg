import Image from 'next/image';
import TopBanner from '../components/top-banner';
import CTAButton from '../components/cta-button';
import Trust from '../components/trust';
import SearchIcon from '@/public/search.svg';

export default function Home() {
  return (
    <main className='px-4 py-2'>
      <TopBanner>1,000,000+ drivers helped so far</TopBanner>
      <h1 className='pt-4 pb-2.5 text-[32px] leading-9.5 font-bold'>
        You could be owed up to &pound;5,318.25* per car finance agreement.
      </h1>
      <p className='pb-5'>
        Check in under 60 seconds to see if you&apos;re owed compensation. Use the free agreement
        finder to start your claim.
      </p>
      <CTAButton>
        <Image src={SearchIcon} alt='Search Icon' />
        Find My Agreements
      </CTAButton>
      <Trust />
    </main>
  );
}
