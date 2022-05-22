import { LzButton } from 'src/components';
import { ThumbsDownIcon, ThumbsUpIcon } from 'public/icons';


const Reaction = ()=> {

  return (
    <div className='flex items-center justify-between px-10 py-5 bg-pri-50 rounded-5'>
      <p className='paragraph-2-s'>Did you find this page useful?</p>
      <div className='flex items-center space-x-4'>
        <LzButton size='md' leftIcon={<ThumbsUpIcon />}>Yes</LzButton>
        <LzButton size='md' leftIcon={<ThumbsDownIcon />}>No</LzButton>
      </div>
    </div>
  );
};

export default Reaction;