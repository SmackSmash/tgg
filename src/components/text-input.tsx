type TextInputProps = {
  secure?: boolean;
  isValid?: boolean;
  email?: boolean;
  [x: string]: unknown;
};

export default function TextInput({ secure, isValid = true, email, ...rest }: TextInputProps) {
  return (
    <input
      type={email ? 'email' : 'text'}
      {...rest}
      className={`bg-input-grey min-w-0 grow rounded-xs px-1.75 py-3.25 outline-0 ${secure && 'bg-[url("../../public/secure-ssl-dark.svg")] bg-size-[51px] bg-position-[97%_55%] bg-no-repeat pr-17'} ${!isValid && 'inset-ring-cta-red inset-ring'}`}
    />
  );
}
