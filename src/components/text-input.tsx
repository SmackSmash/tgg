type TextInputProps = {
  placeholder: string;
};

export default function TextInput({ placeholder }: TextInputProps) {
  return <input type='text' placeholder={placeholder} className='bg-input-grey grow' />;
}
