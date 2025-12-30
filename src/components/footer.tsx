import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='flex gap-4 bg-black px-5 py-5'>
      <Link href='_blank' className='text-[10px] text-white underline'>
        Terms & Conditions
      </Link>
      <Link href='_blank' className='text-[10px] text-white underline'>
        Complaints Procedure
      </Link>
      <Link href='_blank' className='text-[10px] text-white underline'>
        Privacy Policy
      </Link>
    </footer>
  );
}
