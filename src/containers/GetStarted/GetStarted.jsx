import React from 'react'
import start1 from '../../assets/start1.svg'
import start2 from '../../assets/start2.svg'
import start3 from '../../assets/start3.svg'

const GetStarted = () => {
  return (
    <div className='mt-5 partners__bg container'>
    <h2 className='section__heading font-semibold text-center lg:text-4xl max-w-[220px] mx-auto lg:max-w-none lg:mx-0'>Get started in just a few minutes</h2>
    <div className=' relative gap-20 mt-16 grid grid-cols-1 lg:grid-cols-3 place-items-center content-center'>
        <div className='flex flex-col relative items-center'>
            <img src={start1} alt='start' />
            <div className='text-center'>
                <h3 className='getstarted__title'>Sign Up</h3>
                <p className='getstarted__description mt-2'>Buy Bitcoin or Ethereum, then securely store it in your Wallet or send it on easily to friends</p>
            </div>
        </div>
        <div className='flex flex-col  items-center'>
            <img src={start2} alt='start' />
            <div className='text-center'>
                <h3 className='getstarted__title'>Fund</h3>
                <p className='getstarted__description mt-2'>Choose your preferred payment method such as bank transfer or credit card to top up your NEFA Wallet</p>
            </div>
        </div>
        <div className='flex flex-col  items-center'>
            <img src={start3} alt='start' />
            <div className='text-center'>
                <h3 className='getstarted__title'>Buy Crypto</h3>
                <p className='getstarted__description mt-2'>Sign up for your free NEFA Wallet on web, iOS or Android and follow our easy process to set up your profile</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default GetStarted