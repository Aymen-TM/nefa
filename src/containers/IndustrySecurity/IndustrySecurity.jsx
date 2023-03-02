import React from 'react'
import security from '../../assets/security.svg'
import { AiFillCheckCircle } from 'react-icons/ai'
import { Fade } from 'react-reveal'


const IndustrySecurity = () => {
  return (
    <div className='mt-5 '>
    <div className='container mx-auto py-20 flex flex-col lg:flex-row '>
        <div className='flex-1'>
        <Fade up duration={1000}>
            <img src={security} alt="security" />
        </Fade>
            
        </div>
        <div className='flex-1 p-6 lg:p-0'>
            <h2 className='secion__heading'>Industry-leading security from day one</h2>
            <div className='mt-10'>
                <div className='flex items-center gap-4'>
                    <AiFillCheckCircle className='text-primary' />
                    <p className='security__feature-title mt-0 font-bold'>Safety, security and compliance</p>
                </div>
                <p className='mt-3 security__feature-description'>NEFA is a licensed New York trust company that undergoes regular bank exams and is subject to the cybersecurity audits conducted by the New York Department of Financial Services. Learn more about our commitment to security.</p>
            </div>
            <div className='mt-10'>
                <div className='flex items-center gap-4'>
                    <AiFillCheckCircle className='text-primary' />
                    <p className='security__feature-title mt-0 font-bold'>Hardware security keys</p>
                </div>
                <p className='mt-3 security__feature-description'>With NEFA you can secure your account with a hardware security key via WebAuthn.</p>
            </div>
            <div className='mt-10'>
                <div className='flex items-center gap-4'>
                    <AiFillCheckCircle className='text-primary '  />
                    <p className='security__feature-title mt-0 font-bold'>SOC Certifications</p>
                </div>
                <p className='mt-3 security__feature-description'>NEFA is SOC 1 Type 2 and SOC 2 Type 2 compliant. We are the world’s first cryptocurrency exchange and custodian to complete these exams.</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default IndustrySecurity