import React from 'react'
import Image from 'next/image'
import HandWithPenny from 'public/images/handWithPenny.png'
import LzLink from 'components/UI/link'
import LzButton from 'components/UI/button'
import Styles from './index.module.scss'
import classNames from 'classnames'
import { FaAngleRight } from 'react-icons/fa'

const BankPayouts = () => {
  return (
    <>
      <div className='grid md:grid-cols-2 space-y-12 sticky'>
        <div className='col-span-1 flex flex-col justify-center text-left md:pr-24 space-y-8'>
          <h1 className='heading-3-b lg:heading-2-b'>
            Get Notified When Bank Payout is Live
          </h1>
          <p className='paragraph-2'>
            Bank Payout to multiple countries in USD and other local currencies
            is coming soon. Reach out to{' '}
            <LzLink>developers@lazerpay.finance</LzLink> if you have any
            questions regarding this.
          </p>
          <form className='flex flex-col space-y-6'>
            <label className='font-proxima -mb-4 paragraph-1-s'>Email</label>
            <input
              type='email'
              id='email'
              className={classNames(
                Styles.input,
                'placeholder:px-5  placeholder:font-proxima',
              )}
              placeholder='Enter your email address'
            />
            <LzButton
              variant='pri'
              rightIcon
              className='w-[335px] lg:w-[412px]'
              size='lg'
            >
              Notify me
            </LzButton>
          </form>
        </div>
        <div className='col-span-1'>
          <Image
            src={HandWithPenny}
            alt='pennyhandIcon'
            height={'740px'}
            className='w-[335px] h-[392px]'
          />
        </div>
      </div>
    </>
  )
}

export default BankPayouts
