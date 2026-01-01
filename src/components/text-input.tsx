import { useState } from 'react';

type TextInputProps = {
  required?: boolean;
  value: string;
  [x: string]: unknown;
};

export default function TextInput({ required, value, ...rest }: TextInputProps) {
  const [touched, setTouched] = useState(false);

  return (
    <>
      <input
        type='text'
        value={value}
        {...rest}
        onBlur={() => setTouched(true)}
        className='bg-input-grey min-w-0 grow rounded-xs px-1.75 py-3.25 outline-0'
      />
      {required && touched && !value.length && (
        <p className='text-cta-red'>This is a required field</p>
      )}
    </>
  );
}
