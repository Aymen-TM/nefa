import React from 'react'
import CoinAreaChart from '../charts/CoinAreaChart'

const CoinRow = ({name,image,price,uptrend}) => {
  return (
    <div className="grid grid-cols-3 mb-2 py-2 border-b border-lightgray last:border-none">
      <div className="flex items-center">
        <img className='inline h-[1rem] mr-2' draggable="false" src={image} alt={name} />
        {name}
      </div>
      <div className='flex items-center'>
        {uptrend ?
          <span className='text-green mr-1'>+</span>
          :
          <span className='text-red mr-1'>-</span>
        }
        {price}
      </div>
      <div>
        <CoinAreaChart isUpTrend={uptrend} />
      </div>
    </div>
  )
}

export default CoinRow