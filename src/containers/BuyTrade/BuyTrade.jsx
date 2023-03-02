import React from 'react'
import ctaimage from '../../assets/buytrade.svg'

import Select from '../Select'

const BuyTrade = () => {
  return (
    <section className='p-6 lg:p-32'>
      <div className=' container mx-auto gap-10 flex flex-col-reverse lg:flex-row  '>
        <div className='flex-1'>
          <div className='flex flex-col justify-center gap-4 md:gap-6 mb-6 '>
            <h1 className='section__heading font-semibold text-3xl lg:max-w-[468px]'>Buy & trade on the <br /> original crypto exchange.</h1>
            <p className='section__text max-w-[307px]'>Buy now and get 40% extra bonus Minimum pre-sale amount 25 Crypto Coin. We accept BTC crypto-currency</p>
          <div>
          <form onSubmit={()=>{}}>
              <div className="flex justify-between gap-4 md:gap-6 mb-6">
                <div className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center  w-full">
                  <div className="border-r border-primary pr-4 md:pr-6">
                    <small className="text-primary">Amount</small>
                  </div>
                  <input type="text" value="5,000" onChange={()=>{}} className='text-right outline-none w-full' />
                </div>
                <Select value="BTC" />
              </div>

              <div className="flex justify-between gap-4 md:gap-6 mb-6">
                <div className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center w-full">
                  <div className="border-r border-primary pr-4 md:pr-6">
                    <small className="text-primary">Get</small>
                  </div>
                  <input type="text" value="0.10901" onChange={()=>{}} className='text-right outline-none w-full' />
                </div>
                <Select value="BTC" />
              </div>
            </form>
          </div>
        </div>
        </div>
        <div className='flex-1'>
          <Fade up duration={1000}>
            <img src={ctaimage} alt='cta image' />
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default BuyTrade