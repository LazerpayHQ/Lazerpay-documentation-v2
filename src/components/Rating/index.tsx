import React from "react";
import { ThumbsDownIcon, ThumbsUpIcon } from '@site/static/img/icons'; 
import { LzButton } from "..";

const Rating = ():JSX.Element => {

  return (
      <div className='flex items-center justify-between px-8 py-5 bg-pri-50 rounded-5'>
        <div>
          <p className='paragraph-2-s text-pri-900'>Did you find this page useful?</p>
        </div>
        <div className='flex items-center space-x-3'>
          <LzButton size="md" leftIcon={<ThumbsUpIcon />}>Yes</LzButton>
          <LzButton size="md" leftIcon={<ThumbsDownIcon />}>No</LzButton>
        </div>
      </div>
  )
}

export default Rating;