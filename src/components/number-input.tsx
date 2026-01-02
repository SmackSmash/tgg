type NumberInputProps = {
  value: number | null;
  [x: string]: unknown;
};

export default function NumberInput({ value, ...rest }: NumberInputProps) {
  return (
    <input
      type='number'
      value={value ? value.toString() : ''}
      {...rest}
      className='bg-input-grey w-full min-w-0 grow rounded-xs px-1.75 py-3.25 text-center outline-0'
    />
  );
}
