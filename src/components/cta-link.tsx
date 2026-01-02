import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type CTAButtonProps = {
  children: React.ReactNode;
  href?: string;
  disabled?: boolean;
  ring?: boolean;
  green?: boolean;
};

export default function CTALink({
  children,
  href,
  disabled,
  ring,
  green,
  ...rest
}: CTAButtonProps) {
  let buttonClasses =
    'bg-cta-red flex w-full cursor-pointer items-center justify-center gap-4 rounded-lg p-2.75 text-lg font-medium text-white ring-4 transition-shadow';

  if (ring) buttonClasses = twMerge(buttonClasses, 'ring-cta-red/30 hover:ring-6');

  if (green) buttonClasses = twMerge(buttonClasses, 'bg-cta-green ring-cta-green/30 hover:ring-6');

  if (disabled) buttonClasses = twMerge(buttonClasses, 'bg-cta-disabled ring-0 hover:ring-0');

  if (disabled) {
    return (
      <div className={buttonClasses} {...rest}>
        {children}
      </div>
    );
  }
  return (
    <Link href={href || '_blank'} className={buttonClasses} {...rest}>
      {children}
    </Link>
  );
}
