import { useState } from 'react';

type AccordionProps = { items: { label: string; content: string }[] };

export default function Accordion({ items }: AccordionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => setExpandedIndex(index === expandedIndex ? null : index);

  return (
    <dl className='flex w-full flex-col gap-1 pt-4 pb-7 pl-2'>
      {items.map(({ label, content }, index) => (
        <div key={index} className='border-border-grey border-b'>
          <dt
            onClick={() => handleClick(index)}
            className='relative flex cursor-pointer items-center rounded px-4 py-3 leading-6'
          >
            <div className='absolute top-1.5 -left-2 text-2xl'>
              {index === expandedIndex ? '-' : '+'}
            </div>
            {label}
          </dt>
          <dd
            className='text-text-color/80 pb-7 pl-4 text-xs leading-5.5'
            hidden={index !== expandedIndex}
          >
            {content}
          </dd>
        </div>
      ))}
    </dl>
  );
}
