'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { type Option } from '@/src/types';
import DropdownOpen from '@/public/dropdown-open.svg';
import DropdownClose from '@/public/dropdown-close.svg';

type DropdownProps = {
  placeholder: string;
  options: Option[];
  value: Option | null;
  isValid?: boolean;
  onChange: (option: Option) => void;
  onBlur?: () => void;
};

export default function Dropdown({
  placeholder,
  options,
  value,
  isValid = true,
  onChange,
  onBlur
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectHeight, setSelectHeight] = useState(0);

  const selectRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!selectRef.current) return;

    setSelectHeight(selectRef!.current!.clientHeight);
  }, []);

  useEffect(() => {
    if (!dropdownRef.current) return;

    const handler = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', e => handler(e), true);

    return document.removeEventListener('click', e => handler(e), true);
  }, []);

  const handleOptionClick = (option: Option) => {
    setIsOpen(!isOpen);
    onChange(option);
  };

  return (
    <div ref={dropdownRef} tabIndex={0} onBlur={onBlur} className='relative flex w-full flex-col'>
      <div
        onClick={() => setIsOpen(!isOpen)}
        ref={selectRef}
        className={`flex cursor-pointer items-center gap-7 border px-2 py-3 ${isOpen ? 'rounded-t-xs' : 'rounded-xs'} ${value ? 'text-text-color' : 'text-greyed-text'} ${!isValid ? 'border-cta-red' : 'border-text-color/80'}`}
      >
        {value?.label ? value.label : placeholder}
        <Image
          src={isOpen ? DropdownClose : DropdownOpen}
          alt='Toggle Dropdown Icon'
          className='ml-auto'
        />
      </div>
      {isOpen && (
        <div
          style={{ top: `${selectHeight}px` }}
          className='border-greyed-text absolute z-1 w-full overflow-hidden rounded-b-xs border'
        >
          {options.map((option, index) => {
            return (
              <div
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`border-greyed-text w-full cursor-pointer border-b bg-white px-2 py-3 last-of-type:border-0 ${option === value ? 'font-semibold' : ''}`}
              >
                {option.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
