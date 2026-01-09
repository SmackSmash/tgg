export default function RadioInput() {
  return (
    <label className='flex cursor-pointer items-center gap-3'>
      <input type='radio' name='plan' className='peer sr-only' />
      <span className='flex h-5 w-5 items-center justify-center rounded-full border-2 border-gray-400 transition peer-checked:border-blue-600'>
        <span className='h-2.5 w-2.5 scale-0 rounded-full bg-blue-600 transition-transform peer-checked:scale-100'></span>
      </span>
    </label>
  );
}
