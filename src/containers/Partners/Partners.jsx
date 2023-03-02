import React from 'react'
import { Fade } from 'react-reveal'

import partner1 from '../../assets/partner1.png'
import partner2 from '../../assets/partner2.png'
import partner3 from '../../assets/partner3.png'
import partner4 from '../../assets/partner4.png'

const Partners = () => {
  return (
    <div className='mt-5'>
        <div className='container mx-auto py-16 partners__bg'>
            <div className='flex flex-col justify-center items-center'>
                <h3 className='section__heading text-center mt-4  text-3xl font-semibold'>Trusted Partners Worldwide</h3>
                <p className='partners__text'>We're partners with countless major organisations around the globe</p>
            </div>
            <div className='flex flex-col justify-center items-center lg:flex-row'>
                <div className='max-w-[155px] lg:max-w-[300px]'>
                    <Fade up duration={1000}>
                        <img src={partner1} alt='partner' />
                    </Fade>
                </div>
                <div className='max-w-[155px] lg:max-w-[300px]'>
                    <Fade up duration={1000}>
                        <img src={partner2} alt='partner' />
                    </Fade>
                </div>
                <div className='max-w-[155px] lg:max-w-[300px]'>
                    <Fade up duration={1000}>
                        <img src={partner3} alt='partner' />
                    </Fade>
                </div>
                <div className='max-w-[155px] lg:max-w-[300px]'>
                    <Fade up duration={1000}>
                        <img src={partner4} alt='partner' />
                    </Fade>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Partners