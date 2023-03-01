import React from 'react'
import {BiChevronRight} from 'react-icons/bi'
import CoinAreaChart from '../../containers/charts/CoinAreaChart'
import emoji from 'react-easy-emoji';
import CoinRow from './CoinRow'
const ListCoint = ({title,data,more}) => {
  return (<> 
        <div className='flex justify-between  mb-6'>
            <span className="font-bold text-lg">{emoji(title, { props: { className: 'inline-block mr-4 text-normal' } })}</span>
            <a href={more} className='flex items-center text-primary' >more <BiChevronRight /> </a>
        </div>
        <div className="grid grid-cols-3 mb-4">
          <span className='text-gray'>Name</span>
          <span className='text-gray'>Price</span>
          <span className='text-gray'>Chart</span>
        </div>
            {
            data.map(({name,price,image,uptrend})=>(
                <CoinRow name={name} price={price} image={image} uptrend={uptrend} />
            ))
            }
  </>
  )
}

export default ListCoint