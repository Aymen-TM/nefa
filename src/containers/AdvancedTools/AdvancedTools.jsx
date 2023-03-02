import React from 'react'
import { Fade } from 'react-reveal'
import tools from '../../assets/tools.svg'
import SecondaryButton from '../../components/buttons/SecondaryButton'

const AdvancedTools = () => {
  return (
    <div className='mt-5 '>
        <div className='container mx-auto py-20 flex flex-col-reverse lg:flex-row'>
            <div className='flex-1 p-6'>
                <h2 className='section__heading lg:max-w-[570px] font-semibold lg:text-4xl'>Advanced Trading <span className='text-blue-gradient'>Tools</span></h2>
                <div className='mt-10'>
                    <h3 className='tools__feature-title'>Professional Access, Non-stop Availability</h3>
                    <p className='mt-3 tools__feature-description'>We provide premium access to crypto trading for both individuals and institutions through high liquidity, reliable order execution and constant uptime.</p>
                </div>
                <div className='mt-10'>
                    <h3 className='tools__feature-title'>A Range of Powerful Apis</h3>
                    <p className='mt-3 tools__feature-description'>Set up your own trading interface or deploy your algorithmic strategy with our high-performance FIX and HTTP APIs. Connect to our WebSocket for real-time data streaming.</p>
                </div>
                <div className='mt-10'>
                    <h3 className='tools__feature-title'>Customer Support</h3>
                    <p className='mt-3 tools__feature-description'>Premium 24/7 support available to all customers worldwide by phone or email. Dedicated account managers for partners.</p>
                </div>
                <div className='flex flex-col lg:flex-row gap-6  text-center lg:items-center lg:justify-start  mt-6'>
                    <SecondaryButton >Get Started</SecondaryButton>
                    <a href="#" className='text-primary'>Learn More</a>
                </div>
            </div>
            <div className='flex-1'>
            <Fade up duration={1000}>
                <img src={tools} alt="tools" />
            </Fade>
            </div>
        </div>
    </div>
  )
}

export default AdvancedTools