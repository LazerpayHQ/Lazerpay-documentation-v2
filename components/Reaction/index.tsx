import { LzButton } from 'components';
import { ThumbsDownIcon, ThumbsUpIcon } from 'public/icons';


const Reaction = ():JSX.Element => {

  return (
    <div className='flex items-center justify-between p-5 space-x-3 md:px-10 md:py-5 bg-pri-50 rounded-5'>
      <p className='paragraph-1-s md:paragraph-2-s'>Did you find this page useful?</p>
      <div className='flex items-center space-x-4'>
        <LzButton className='caption md:paragraph-1' size='md' leftIcon={<ThumbsUpIcon />}>Yes</LzButton>
        <LzButton className='caption md:paragraph-1' size='md' leftIcon={<ThumbsDownIcon />}>No</LzButton>
      </div>
    </div>
  );
};

export default Reaction;