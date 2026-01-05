type NumberInputProps = {
  isValid?: boolean;
  [x: string]: unknown;
};

export default function NumberInput({ isValid = true, ...rest }: NumberInputProps) {
  return (
    <input
      type='number'
      {...rest}
      className={`bg-input-grey w-full min-w-0 grow rounded-xs px-1.75 py-3.25 text-center outline-0 ${!isValid && 'inset-ring-cta-red inset-ring'}`}
    />
  );
}
