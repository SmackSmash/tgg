import Link from 'next/link';
import SRANotice from '@/src/components/sra-notice';

export default function Footer() {
  return (
    <>
      <SRANotice />
      <footer className='flex gap-4 bg-black px-5 py-5'>
        <Link href='' target='_blank' className='text-[10px] text-white underline'>
          Terms & Conditions
        </Link>
        <Link href='' target='_blank' className='text-[10px] text-white underline'>
          Complaints Procedure
        </Link>
        <Link href='' target='_blank' className='text-[10px] text-white underline'>
          Privacy Policy
        </Link>
      </footer>
    </>
  );
}
