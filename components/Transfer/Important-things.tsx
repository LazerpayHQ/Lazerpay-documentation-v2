import React from 'react'
import LzAlert from 'components/UI/alert'

const ImportantThings = () => {
  return (
    <div>
      <ul className='flex flex-col mt-6 space-y-4'>
        <li>
          <code>1</code> The <code className='text-err-700'> blockchain</code>{' '}
          field must be <code>"Binance Smart Chain"</code>
        </li>
        <li>
          <code>2</code> The <code className='text-err-700'>coin</code> field
          must either be "BUSD", "DIA", "USDT", or "USDC"
        </li>
      </ul>
      <LzAlert
        className='my-12'
        status='warning'
        content='We only supply the binance smart chian for withdrawals,we will add more networks 
in the future.'
      />
    </div>
  )
}

export default ImportantThings
