import Alert from 'components/UI/alert'
import BinanceImage from 'public/icons/binance-image'
import React from 'react'

const TestPayments = () => {

    return (
        <>

            <Alert
                status="info"
                className="mt-2 mb-8 "
                content=' Please note that you have to use a non-custodial wallet to make test payments. You can follow this link to learn how to setup MetaMask.' />

            <h5 className='heading-5-s mb-8'> How to get Test Stable-coins</h5>

            <ul className=' space-y-5 mb-6'>
                <li> <code> 1 </code> Go to the Binance testnet faucet.  </li>
                <li> <code> 2 </code> Input your BEP20 address..  </li>
                <li> <code> 3 </code> Click on peggy Tokens and select USDT..  </li>
            </ul>

            <div className='grid md:grid-cols-2 md:space-y-0 space-y-12 sticky'>
                <div className='col-span-1'>
                    <BinanceImage />
                </div>
            </div>
        </>
    )
}

export default TestPayments
