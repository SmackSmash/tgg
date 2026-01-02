type TextInputProps = {
  value: string;
  [x: string]: unknown;
};

export default function TextInput({ value, ...rest }: TextInputProps) {
  return (
    <>
      <input
        type='text'
        value={value}
        {...rest}
        className='bg-input-grey min-w-0 grow rounded-xs px-1.75 py-3.25 outline-0'
      />
    </>
  );
}
