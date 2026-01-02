import Image from 'next/image';
import CTALink from '@/src/components/cta-link';
import TextInput from '@/src/components/text-input';
import SearchIcon from '@/public/search.svg';

export default function ContactForm() {
  return (
    <form className='flex flex-col gap-1 pt-4.5'>
      <h2 className='text-2xl font-semibold'>Your Mobile Number</h2>
      <p className='pb-1'>For example: 07123456789</p>
      <TextInput placeholder='Enter Mobile Number' value={''} secure />
      <h2 className='pt-4 text-2xl font-semibold'>Your Email Address</h2>
      <p className='pb-1.5'>For example: John@example.co.uk</p>
      <div className='flex w-full pb-4'>
        <TextInput placeholder='Enter Email Address' value={''} secure />
      </div>
      <CTALink href='/signature' disabled={true}>
        <Image src={SearchIcon} alt='Search Icon' />
        Find My Agreements
      </CTALink>
    </form>
  );
}
