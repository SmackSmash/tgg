import { useState } from 'react';

type NumberInputProps = {
  required?: boolean;
  value: number | null;
  [x: string]: unknown;
};

export default function NumberInput({ required, value, ...rest }: NumberInputProps) {
  const [touched, setTouched] = useState(false);

  return (
    <>
      <input
        type='number'
        value={value ? value.toString() : ''}
        onBlur={() => setTouched(true)}
        {...rest}
        className='bg-input-grey w-full min-w-0 grow rounded-xs px-1.75 py-3.25 text-center outline-0'
      />
      {required && touched && !value && <p className='text-cta-red'>Required</p>}
    </>
  );
}
