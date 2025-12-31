import Image from 'next/image';
import Logo from '@/public/logo.svg';
import Trustpilot from '@/public/trustpilot-light.svg';
import SecureSSL from '@/public/secure-ssl-light.svg';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex items-center gap-4 bg-black px-4 py-2.5'>
      <Link href='/'>
        <Image src={Logo} alt='PCP Pal Logo' />
      </Link>
      <Image src={Trustpilot} alt='Trustpilot Score' className='ml-auto' />
      <Image src={SecureSSL} alt='Secure SSL Logo' />
    </header>
  );
}
