import { type ReactNode } from 'react';

type FormErrorProps = {
  children: ReactNode;
};

export default function FormError({ children }: FormErrorProps) {
  return <span className='text-cta-red'>{children}</span>;
}
