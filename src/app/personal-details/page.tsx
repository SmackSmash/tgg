import DetailsForm from '@/src/components/details-form';
import TopBanner from '@/src/components/top-banner';
import Trust from '@/src/components/trust';

export default function PersonalDetails() {
  return (
    <main className='px-4 py-2'>
      <TopBanner>32.62 million drivers at risk of losing out on compensation</TopBanner>
      <h1 className='pt-4 text-2xl font-semibold'>Your Personal Details</h1>
      <p className='text-text-color/80 py-1'>
        Your current personal details are essential to search for all finance agreements attached to
        your name.
      </p>
      <DetailsForm />
      <Trust />
    </main>
  );
}
