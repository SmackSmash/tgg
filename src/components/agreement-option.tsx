import Image from 'next/image';
import LogoSmall from '@/public/logo-small.svg';

type AgreementOptionProps = {
  agreement: {
    reg: string;
    financier: string;
    date: number;
    modelImg: string;
  };
};

export default function AgreementOption({ agreement }: AgreementOptionProps) {
  const { reg, financier, date, modelImg } = agreement;

  return (
    <div className='cursor-pointer overflow-hidden rounded-sm'>
      <div className='bg-text-color/80 flex gap-2 px-2 py-1'>
        <Image src={LogoSmall} alt='PCP Pal Logo' />
        <span className='font-charleswright bg-reg-yellow rounded px-2 pt-0.5 text-[9.2px]'>
          {reg}
        </span>
      </div>
      <div className='flex justify-between p-2'>
        <div className='flex flex-col'>
          <span className='text-[12px] font-bold'>{financier}</span>
          <span className='text-[12px]'>
            Date of agreement: <strong>{date}</strong>
          </span>
        </div>
        <div className='relative h-10 w-20'>
          <Image
            src={`/${modelImg}.png`}
            alt={modelImg}
            fill
            className='object-cover'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
      </div>
    </div>
  );
}
