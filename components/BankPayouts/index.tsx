import React from 'react'
import { periphery } from './data'
import { PayoutLHS } from './PayoutLSH'
import HandsWithPenny from 'public/icons/handsWithPenny'


const BankPayouts = () => {
  return (
    <>
      <div className='grid md:grid-cols-2 md:space-y-0 space-y-12 sticky'>
        {periphery.map(({ type, label, title, desc }) => {
          return (
            <div
              key={title}
              className='col-span-1 flex flex-col justify-center text-left md:pr-24 space-y-8'
            >
              <PayoutLHS
                desc={desc}
                type={type}
                label={label}
                title={title}
              />
            </div>
          )
        })}
        <div className='col-span-1'>
          <HandsWithPenny />
        </div>
      </div>
    </>
  )
}

export default BankPayouts
