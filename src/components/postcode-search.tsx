import TextInput from './text-input';

export default function PostcodeSearch() {
  return (
    <form className='py-1'>
      <p>Enter your postcode and tap &lsquo;Search&rsquo;.</p>
      <TextInput placeholder='Postcode' />
      <button className='bg-cta-red disabled:bg-cta-disabled rounded-full text-[15px] font-semibold text-white'>
        Search
      </button>
    </form>
  );
}
