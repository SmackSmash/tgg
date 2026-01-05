import Image from 'next/image';
import { useForm } from 'react-hook-form';
import CTALink from './cta-link';
import ChevronRight from '@/public/chevron-right.svg';
import FileIcon from '@/public/file.svg';

export default function IDUpload() {
  const {
    register,
    formState: { isValid }
  } = useForm({ mode: 'onTouched' });

  return (
    <form>
      <label className='bg-upload-bg-blue border-upload-border-blue text-upload-text-blue mb-5 flex cursor-pointer justify-center gap-2 rounded-md border-2 py-4 font-bold'>
        <Image src={FileIcon} alt='File Icon' />
        Click to Upload
        <input type='file' className='sr-only' {...register('id', { required: true })} />
      </label>
      <CTALink button disabled={!isValid}>
        Submit
        <Image src={ChevronRight} alt='Right Arrow Icon' />
      </CTALink>
    </form>
  );
}
