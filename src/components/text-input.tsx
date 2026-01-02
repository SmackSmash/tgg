type TextInputProps = {
  value: string;
  secure?: boolean;
  [x: string]: unknown;
};

export default function TextInput({ value, secure, ...rest }: TextInputProps) {
  return (
    <input
      type='text'
      value={value}
      {...rest}
      className={`bg-input-grey min-w-0 grow rounded-xs px-1.75 py-3.25 outline-0 ${secure && 'bg-[url("../../public/secure-ssl-dark.svg")] bg-size-[51px] bg-position-[97%_55%] bg-no-repeat'}`}
    />
  );
}
