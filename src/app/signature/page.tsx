'use client';

import { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import TopBanner from '@/src/components/top-banner';
import Trust from '@/src/components/trust';

export default function PersonalDetails() {
  const signatureRef = useRef<SignatureCanvas | null>(null);

  const handleClear = () => {
    signatureRef.current?.clear();
  };

  const handleSave = () => {
    if (!signatureRef.current) return;
    const dataUrl = signatureRef.current.toDataURL('image/png');
    console.log(dataUrl);
  };

  return (
    <main className='px-4 py-2'>
      <TopBanner>Final step! Your claim is 100% no-win, no-fee!</TopBanner>
      <h1 className='pt-4 text-2xl font-semibold'>Great News, David, we&apos;ve found 3 claims</h1>
      <p className='text-text-color/80 py-1'>
        Submit your claim to reveal your lenders and potential compensation amount.
      </p>
      <SignatureCanvas
        ref={signatureRef}
        canvasProps={{ width: 343, height: 200, className: 'sigCanvas' }}
      />
      <button onClick={handleClear}>Clear</button>
      <button onClick={handleSave}>Save</button>
      <Trust />
    </main>
  );
}
