'use client';

import { useState } from 'react';
import Image from 'next/image';
import DropdownClose from '@/public/dropdown-close.svg';
import DropdownOpen from '@/public/dropdown-open.svg';
import AgreementOption from './agreement-option';

const agreements = [
  { reg: 'SG65 YBA', financier: 'Black Horse Finance', date: 2011, modelImg: 'merc' },
  { reg: 'KY70 LMO', financier: 'Santander Finance', date: 2020, modelImg: 'bmw' },
  { reg: 'FF72 ZLA', financier: 'Audi Finance', date: 2021, modelImg: 'audi' }
];

export default function AgreementsMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='text-text-color/80 border-text-color/80 flex cursor-pointer items-center gap-7 rounded-xs border px-2 py-3'
      >
        <span>
          <strong>3</strong> Agreements Found
        </span>
        <Image
          src={isOpen ? DropdownClose : DropdownOpen}
          alt='Toggle Dropdown Icon'
          className='ml-auto'
        />
      </button>
      <div className='flex flex-col gap-2 py-2'>
        {isOpen &&
          agreements.map(agreement => (
            <AgreementOption agreement={agreement} key={agreement.reg} />
          ))}
      </div>
    </>
  );
}
