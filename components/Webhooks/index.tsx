import LazerpayDashboard from 'public/icons/Lazerpay-dashboard'
import React from 'react'

const Webhooks = () => {
  return (
    <>
      <ul className=' space-y-5 mb-6'>
        <li>
          {' '}
          <code> 1 </code> Login to your dashboard and click on Settings.{' '}
        </li>
        <li>
          {' '}
          <code> 2 </code> Input your BEP20 address..{' '}
        </li>
        <li>
          {' '}
          <code> 3 </code> Click on peggy Tokens and select USDT..{' '}
        </li>
      </ul>

      <div className='grid md:grid-cols-2 md:space-y-0 space-y-12 sticky'>
        <div className='col-span-1'>
          <LazerpayDashboard />
        </div>
      </div>
    </>
  )
}

export default Webhooks
