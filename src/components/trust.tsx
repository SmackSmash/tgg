import Image from 'next/image';
import Trustpilot from '@/public/trustpilot-dark.svg';
import SecureSSL from '@/public/secure-ssl-dark.svg';

export default function Trust() {
  return (
    <section className='border-border-grey flex flex-col items-center border-b pb-2.5'>
      <div className='flex items-end gap-6'>
        <Image src={Trustpilot} alt='Trustpilot Score' />
        <Image src={SecureSSL} alt='Secure SSL Logo' />
      </div>
      <p className='pt-3.5 text-center text-2xl font-medium'>
        Average claim value:
        <br />
        <strong>&pound;5,318.25*</strong> per vehicle
      </p>
    </section>
  );
}
