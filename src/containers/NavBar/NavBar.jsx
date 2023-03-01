import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import SecondaryButton from '../../components/buttons/SecondaryButton'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import Menus from './Menus'
import classNames from 'classnames'
import { useMediaQuery } from 'react-responsive'




const NavBar = () => {

  const [dropDownMenuOpen, setDropDownMenuOpen] = useState(false)
  const [backgroundwhite, setBackgroundWhite] = useState(false);

  const isMobile = useMediaQuery({
    query:"maxWidth: '768px' "
  })

  const handleWindowScroll = (e) => {
    const height = window.scrollY;
    const tresholdHeight = 10;

    if (height > tresholdHeight) {
      setBackgroundWhite(true);
    } else {
      setBackgroundWhite(false);
    }
  };

  const handleBlackScreenClick = (e) => {
    e.stopPropagation();
    setDropDownMenuOpen(false);
  };

  useEffect(() => {
    if (isMobile) {
      setDropDownMenuOpen(false);
    }
  }, [isMobile]);

  useEffect(() => {
    setBackgroundWhite(dropDownMenuOpen);
  }, [dropDownMenuOpen]);

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);

    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);


  return (
    <nav className={classNames('fixed w-full transition-all duration-700 z-10 ', {
      'bg-white shadow-lg ': backgroundwhite
    })}>
    <div className='flex container mx-auto py-12 px-6 lg:py-6 lg:px-0 ' >
      <div className='flex justify-between items-center w-full lg:w-auto'>
        <img src={logo} alt='logo' />
        <div className="md:hidden text-2xl">
          <button className="z-50 p-4 block transition-all" >
            {!dropDownMenuOpen ?
              <AiOutlineMenu className='h-6 w-6'  onClick={()=>setDropDownMenuOpen(!dropDownMenuOpen)}/>
              :
              <AiOutlineClose  className='h-6 w-6' onClick={()=>setDropDownMenuOpen(!dropDownMenuOpen)} />
            }
          </button>
            {/* Menu dropdown */}
            <div className={classNames({
              'text-base left-0 top-full right-0 absolute transition-all duration-400': true,
              'invisible opacity-0': !dropDownMenuOpen,
              'visible opacity-100': dropDownMenuOpen,
            })}>
              <div className="h-screen left-0 bg-black bg-opacity-30" onClick={()=>{handleBlackScreenClick}}>
                <div className="z-20 shadow-xl bg-white p-6">
                  <div className="gap-4 flex mb-6">
                    <SecondaryButton className="w-full">
                      Sign In
                    </SecondaryButton>
                    <PrimaryButton className="w-full">
                      Sign Up
                    </PrimaryButton>
                  </div>
                  <div className="mb-4">
                    <ul className='list-none'>
                      <Menus />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <ul className='hidden lg:flex items-center gap-6 pl-12 list-none'>
        <Menus />
      </ul>
      <div className='hidden lg:flex items-center gap-2 flex-1  justify-end'>
        <SecondaryButton>Login</SecondaryButton>
        <PrimaryButton>Sign Up</PrimaryButton>
      </div>
    </div>
    
    </nav>
  )
}

export default NavBar