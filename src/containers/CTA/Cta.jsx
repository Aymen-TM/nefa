import React from 'react'
import cards from '../../assets/cards.svg'
import {AiFillCheckCircle} from 'react-icons/ai'
import SecondaryButton from '../../components/buttons/SecondaryButton'

const Cta = () => {
  return (
    <div className='mt-10'>
        <div className='container gap-10 grid grid-cols-1 lg:grid-cols-2 p-6'>
            <div>
                <img src={cards} className=" w-[500px]"/>
            </div>
            <div>
                <h2 className='secion__heading max-w-[263px] lg:max-w-[404px]'>Introducing the <span className='text-blue-gradient'>NEFA</span>  Credit Card</h2>
                <p className='section__text max-w-[290px] lg:max-w-[510px]'>Subject to cardholder and rewards terms which will be available at application.</p>
                <div className='flex flex-col lg:items-start gap-6 mt-5'>
                    <div className='flex items-center gap-4'>
                        <AiFillCheckCircle className='text-primary' />
                        <p className='section__text mt-0 font-bold'>Up to 3% back on purchases</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <AiFillCheckCircle className='text-primary' />
                        <p className='section__text mt-0 font-bold'>Earn rewards in bitcoin or any crypto on NEFA</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <AiFillCheckCircle className='text-primary' />
                        <p className='section__text mt-0 font-bold'>No annual fee</p>
                    </div>
                    <SecondaryButton>Join the waitlist</SecondaryButton>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Cta