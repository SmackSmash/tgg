import Link from 'next/link';

type CTAButtonProps = {
  children: React.ReactNode;
  href?: string;
};

export default function CTALink({ children, href }: CTAButtonProps) {
  return (
    <Link
      href={href || '_blank'}
      className='bg-cta-red ring-cta-red/30 flex w-full cursor-pointer items-center justify-center gap-4 rounded-lg p-2.75 text-lg font-medium text-white ring-4 transition-shadow hover:ring-6'
    >
      {children}
    </Link>
  );
}
