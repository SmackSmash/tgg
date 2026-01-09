'use client';

import { useState, useRef } from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useAppSelector, useAppDispatch } from '@/src/store/hooks';
import { addSignature } from '@/src/store';
import SignatureCanvas from 'react-signature-canvas';
import TopBanner from '@/src/components/top-banner';
import Trust from '@/src/components/trust';
import CTALink from '@/src/components/cta-link';
import Eraser from '@/public/eraser.svg';
import Check from '@/public/check-white.svg';

export default function PersonalDetails() {
  const { postcode, firstname } = useAppSelector(
    ({
      form: {
        postcode,
        details: { firstname }
      }
    }) => ({
      postcode,
      firstname
    })
  );
  if (!postcode) redirect('/address');
  const dispatch = useAppDispatch();
  const signatureRef = useRef<SignatureCanvas | null>(null);
  const [hasSignature, setHasSignature] = useState(false);

  const handleClear = () => {
    signatureRef.current?.clear();
    setHasSignature(false);
  };

  const handleEnd = () => {
    if (signatureRef.current) {
      setHasSignature(!signatureRef.current.isEmpty());
      const dataUrl = signatureRef.current.toDataURL('image/png');
      dispatch(addSignature(dataUrl));
    }
  };

  return (
    <main className='px-4 py-2'>
      <TopBanner>Final step! Your claim is 100% no-win, no-fee!</TopBanner>
      <section className='pt-4 pb-7'>
        <h1 className='pb-1 text-[32px] leading-9.5 font-semibold'>
          <span className='text-cta-green'>Great News,</span> {firstname},<br /> we&apos;ve found{' '}
          <strong>3</strong> claims
        </h1>
        <p className='text-text-color/80 pb-2'>
          Submit your claim to reveal your lenders and potential compensation amount.
        </p>
        <p className='pb-2 text-xs'>
          Use your finger or stylus to <strong>sign on the dotted line</strong> below.
        </p>
        <div className='border-text-color/80 border-b-2 border-dashed'>
          <SignatureCanvas
            ref={signatureRef}
            canvasProps={{ width: 343, height: 171, className: 'sigCanvas' }}
            onEnd={handleEnd}
          />
        </div>
        <div className='flex justify-between pt-0.5 pb-2'>
          <span className='italic'>Signature</span>
          <button
            onClick={handleClear}
            className='bg-text-color/80 flex items-center gap-1 rounded-xs px-2 text-xs text-white'
          >
            <Image src={Eraser} alt='Eraser Icon' />
            Reset signature
          </button>
        </div>
        <Link href='' target='_blank' className='text-xs underline'>
          View our no-win no-fee client agreement (DBA)
        </Link>
        <p className='pt-2.5 pb-5.5 text-[8px] leading-3.25'>
          By proceeding, you confirm that you have read, understand, and accept Courmacs Legal
          Limited&rsquo;s Terms and Conditions. I also agree to instruct Courmacs Legal Limited to
          send a data subject access request (DSAR) to find out if my PCP or HP agreements were
          mis-sold By clicking &lsquo;Submit My Claim&rsquo;, I understand that for each claim, I
          will receive a new damages-based agreement for me to review and that my signature above
          will be applied to each document.
        </p>
        <p className='pb-3.5 text-center text-xs'>
          Up to <strong>9 out of 10 car finance agreements</strong> are affected*
        </p>
        <CTALink href='/thank-you' disabled={!hasSignature} green>
          <Image src={Check} alt='Check Icon' />
          Submit Claim & Reveal
        </CTALink>
      </section>
      <Trust />
    </main>
  );
}
