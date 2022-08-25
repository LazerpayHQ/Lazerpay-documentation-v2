import React from 'react'
import Divider from 'components/Divider'
import LzAlert from 'components/UI/alert'
import CodeBlock from 'components/CodeBlock'

const CryptoTransfer = () => {
  return (
    <div>
      CodeBlock <br />
      CodeBlock
      <h5 className='heading-5-s my-7'>Important things to Note</h5>
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
      <Divider className='w-20' />
      <h5 className='heading-5-s my-7'>From the official JS SDK</h5>
      <p className='pararaph-2 my-5'>
        With the JS SDK, you can transfer the crypto in your Lazerpay account to
        an external address. See the code bellow:
      </p>
      <CodeBlock req='JavaScript' id='cryptoTransferSample3' />
    </div>
  )
}

export default CryptoTransfer
