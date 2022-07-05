import React from 'react'
import Image from 'next/image'
import HandWithPenny from 'public/images/handWithPenny.png'
import LzLink from 'components/UI/link'
import LzButton from 'components/UI/button'
import Styles from './index.module.scss'
import classNames from 'classnames'
import { FaAngleRight } from 'react-icons/fa'
import { periphery } from './data'

interface MyProps {
  title: string
  desc: string
  label: string
  type?: string
  id?: string
}

export const PayoutLHS = ({ title, desc, label, id, type }: MyProps) => {
  return (
    <>
        <h1 className='heading-3-b lg:heading-2-b'>{title}</h1>
        <p className='paragraph-2'>{desc}</p>
        <form className='flex flex-col space-y-6'>
          <label className='font-proxima -mb-4 capitalize paragraph-1-s'>
            {label}
          </label>
          <input
            type={type}
            id={id}
            className={classNames(
              Styles.input,
              'placeholder:px-5  placeholder:font-proxima',
            )}
            placeholder='Enter your email address'
          />
          <LzButton
            variant='pri'
            rightIcon={<FaAngleRight />}
            className='w-[335px] lg:w-[412px]'
            size='lg'
          >
            Notify me
          </LzButton>
        </form>
    </>
  )
}

const BankPayouts = () => {
  return (
    <>
      <div className='grid md:grid-cols-2 md:space-y-0 space-y-12 sticky'>
        {periphery.map(({ id, type, label, title, desc }: MyProps) => {
          return (
      <div key={title} className='col-span-1 flex flex-col justify-center text-left md:pr-24 space-y-8'>
              <PayoutLHS
                id={id}
                type={type}
                label={label}
                title={title}
                desc={desc}
              />
            </div>
          )
        })}
        <div className='col-span-1'>
          <Image
            src={HandWithPenny}
            alt='pennyhandIcon'
            height={'847px'}
            className='w-[412px] h-[392px]'
          />
        </div>
      </div>
    </>
  )
}

export default BankPayouts
