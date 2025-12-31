export default function TextInput({ ...rest }) {
  return (
    <input
      type='text'
      {...rest}
      className='bg-input-grey min-w-0 grow rounded-sm px-1.75 py-3.25 outline-0'
    />
  );
}
