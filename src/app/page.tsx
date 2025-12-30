import TopBanner from '../components/top-banner';

export default function Home() {
  return (
    <main className='px-4 py-2'>
      <TopBanner>1,000,000+ drivers helped so far</TopBanner>
      <h1 className='pt-4 pb-2.5 text-[32px] leading-9.5 font-bold'>
        You could be owed up to &pound;5,318.25* per car finance agreement.
      </h1>
      <p>
        Check in under 60 seconds to see if you&apos;re owed compensation. Use the free agreement
        finder to start your claim.
      </p>
    </main>
  );
}
