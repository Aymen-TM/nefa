import React from 'react'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import SecondaryButton from '../../components/buttons/SecondaryButton'
import {BiChevronDown} from 'react-icons/bi'
import heroimage from '../../assets/heroimage.png'
import BlueCircleParticle from '../../components/particals/BlueCircleParticle'
import OrangeCircleParticle from '../../components/particals/OrangeCircleParticle'
import StarParticle from '../../components/particals/StarParticle'
import PurpleCircleParticle from '../../components/particals/PurpleCircleParticle'
const Hero = () => {
  return (
    <div className='  py-32 flex items-center justify-center relative  bg-primary bg-opacity-5 overflow-hidden'>
      <span className="absolute bg-purple-400 -left-28 -top-28 rounded-full opacity-[20%] blur-3xl aspect-square h-[350px] -z-10 animate-pulse" />
      <span className="absolute bg-gradient-to-br from-primary to-secondary -right-28 -bottom-28 rounded-full opacity-[15%] blur-3xl  delay-700 duration-1000 aspect-square h-[550px] -z-10" />

      <section className='container grid md:grid-cols-2'>
        <div >
          <div className='flex flex-col items-center justify-center lg:items-start relative'>
            <p className='hero__subheading'>SIGN UP TODAY</p>
            <h1 className='hero__heading'>The World’s <span className='text-blue-gradient'>Fastest Growing</span> Crypto Web App <StarParticle className=" hidden lg:block absolute -top-0 right-20 duration-[5s]" /></h1>
            <p className='hero__text'>Buy and sell 200+ cryptocurrencies with 20+ flat currencies using bank transfers or your credit/debit card.</p>
            <PurpleCircleParticle className="absolute hidden lg:block -bottom-40 -left-20" />
          </div>
          <div className='flex flex-col p-6 lg:p-0 mt-10 gap-2 lg:flex-row'>
              <PrimaryButton>Get Started</PrimaryButton>
              <SecondaryButton>Download App <BiChevronDown /></SecondaryButton>
          </div>
        </div>
        <div className=' hidden lg:block relative '>
          <BlueCircleParticle className="absolute top-20 left-11 duration-[5s]" />
          <OrangeCircleParticle className="absolute bottom-1/4 right-0" />
          <img src={heroimage} className="w-full object-contain" alt="hero image"/>
        </div>
      </section>
    </div>
  )
}

export default Hero