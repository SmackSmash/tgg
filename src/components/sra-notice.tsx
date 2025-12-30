import Image from 'next/image';
import SRALogo from '@/public/sra-logo.svg';
import Link from 'next/link';

export default function SRANotice() {
  return (
    <section className='pr-3 pb-5 pl-5 text-[11px] font-light'>
      <Image src={SRALogo} alt='SRA Logo' className='pb-5' />
      <p className='pb-5 leading-5'>
        PCP Pal is a trading style of Courmacs Legal Limited. Registered in England and Wales,
        Company No. 13185687 Authorised and regulated by the Soliciters Regulation Authority (SRA) -
        SRA Reg No: 819044 Registered with the Information Commissioner&apos;s Office (ICO) - ICO
        Reg No: ZA886741.
      </p>
      <p className='pb-5 leading-5'>
        The outcome of your claim will depend on the specific circumstances of your case. Resultsmay
        vary, and past performance does not indicate future outcomes.
      </p>
      <p className='pb-5 leading-5'>
        *&pound;5,318.25 is the average claim as of 29/05/2024.
        <br />
        *&pound;10,446.46 is the most significant claim value as of 29/05/2024.
        <br />
        *Based on industry research; industry results may vary.
      </p>
      <h4 className='font-semibold'>Privacy and Compaints</h4>
      <p className='pb-5 leading-5'>
        By submitting a claim, you consent to Courmacs Legal Limited processing your data in
        accordance with our <Link href='_blank'>Privacy Policy</Link>. For concerns, please review
        our <Link href='_blank'>Complaints Procedure</Link>.
      </p>
      <p className='pb-5 leading-5'>
        The agreements identified are subject to verification. This means that while agreements may
        be initially detected, they must go through a verification process to confirm eligibility.
      </p>
    </section>
  );
}
