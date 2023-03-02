import React from 'react'
import cards from '../../assets/cards.svg'
import {AiFillCheckCircle} from 'react-icons/ai'

const Cta = () => {
  return (
    <div className='mt-10'>
        <div className='container gap-10 grid grid-cols-1 lg:grid-cols-2 p-6'>
            <div>
                <img src={cards} className="object-contain w-[500px]"/>
            </div>
            <div>
                <h2 className='cta__heading'>Introducing the <span className='text-blue-gradient'>NEFA</span>  Credit Card</h2>
                <p className='cta__text'>Subject to cardholder and rewards terms which will be available at application.</p>
                <div className='flex flex-col gap-4 mt-5'>
                    <div className='flex items-center gap-4'>
                        <AiFillCheckCircle className='text-primary' />
                        <p className='cta__text mt-0 font-bold'>Up to 3% back on purchases</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <AiFillCheckCircle className='text-primary' />
                        <p className='cta__text mt-0 font-bold'>Earn rewards in bitcoin or any crypto on NEFA</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <AiFillCheckCircle className='text-primary' />
                        <p className='cta__text mt-0 font-bold'>No annual fee</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cta