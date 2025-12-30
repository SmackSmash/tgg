import Image from 'next/image';
import UserIcon from '@/public/user-icon.svg';

export default function TopBanner({ children }: { children: React.ReactNode }) {
  return (
    <section className='border-border-grey flex items-center gap-2.5 border-b pt-0.5 pb-1.5 text-[11px]'>
      <Image src={UserIcon} alt='User Icon' />
      {children}
    </section>
  );
}
