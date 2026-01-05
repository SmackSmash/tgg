'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CTALink from '@/src/components/cta-link';
import Accordion from '@/src/components/accordion';
import SearchIcon from '@/public/search.svg';

const faqAccordionData = [
  {
    label: 'How do I determine if I qualify for compensation?',
    content: `If you've had a finance agreement like PCP or HP before 2021, you may be eligible for compensation due to mis-selling. Check your eligibility by filling out our online form.`
  },
  {
    label: 'What criteria must I meet to make a claim?',
    content:
      'Your lender must have failed to disclose the commission details on your agreement(s). If your finance details were inadequately explained or you faced higher interest rates due to commissions, you could be eligible for £1,000s. Check our free online form to see if you meet the criteria.'
  },
  {
    label: 'Does the type of agreement matter (PCP vs. HP)?',
    content:
      "Don't worry if you had an HP loan instead of a PCP agreement - we accept claims for various vehicle finance agreements. Start your claim today with our online form."
  }
];

export default function Lenders() {
  const [faqOpen, setFaqOpen] = useState(false);

  return (
    <section className='mb-1.5 flex flex-col gap-4 bg-black px-2.5 py-5'>
      <p className='mx-1.5 text-white'>
        We will locate all of your vehicle finance agreements with all these 73 lenders.
      </p>
      <Link
        href='_blank'
        className='bg-lenders-grey mx-1.5 flex cursor-pointer items-center justify-center rounded-lg p-2'
      >
        View Lenders
      </Link>
      {faqOpen ? (
        <div className='bg-white px-4 pt-5.5 pb-9'>
          <h2 className='text-2xl font-semibold'>Frequently Asked Questions</h2>
          <Accordion items={faqAccordionData} />
          <CTALink href='/address' ring>
            <Image src={SearchIcon} alt='Search Icon' />
            Find My Agreements
          </CTALink>
        </div>
      ) : (
        <button
          onClick={() => setFaqOpen(true)}
          className='bg-pcp-grey font-md mx-1.5 flex cursor-pointer items-center justify-center rounded-lg p-3 text-white'
        >
          See More About PCP
        </button>
      )}
    </section>
  );
}
