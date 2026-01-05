import { type ReactNode } from 'react';

type FormErrorProps = {
  children: ReactNode;
};

export default function FormError({ children }: FormErrorProps) {
  return <span className='text-cta-red pt-1 text-[11px]'>{children}</span>;
}
