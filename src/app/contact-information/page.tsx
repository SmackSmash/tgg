import Image from 'next/image';
import CTALink from '@/src/components/cta-link';
import TextInput from '@/src/components/text-input';
import TopBanner from '@/src/components/top-banner';
import SearchIcon from '@/public/search.svg';

export default function ContactInformation() {
  return (
    <main className='px-4 py-2'>
      <TopBanner>Final step! Your claim is 100% no-win, no-fee!</TopBanner>
      <form className='flex flex-col'>
        <TextInput value={''} secure />
        <CTALink href='/address' disabled={true}>
          <Image src={SearchIcon} alt='Search Icon' />
          Find My Agreements
        </CTALink>
      </form>
    </main>
  );
}
