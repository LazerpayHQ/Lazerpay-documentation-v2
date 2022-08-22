import BinanceImage from 'public/icons/binance-image'
import React from 'react'

const BinanceIcon = () => {

    return (
        <>
            <div className='grid md:grid-cols-2 md:space-y-0 space-y-12 sticky'>
                <div className='col-span-1'>
                    <BinanceImage />
                </div>
            </div>
        </>
    )
}

export default BinanceIcon
