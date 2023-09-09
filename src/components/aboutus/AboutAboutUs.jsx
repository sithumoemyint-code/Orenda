import React from 'react'
import aboutUs from '../../data/aboutUs.json'
import AboutUs from './components/AboutUs'

const AboutAboutUs = () => {

  return (
    <div className='bg-[#F4F4F4]'>
      <div className='global-container'>

        <div className='lg:block hidden'>
          <AboutUs />
        </div>
        
        <div className='lg:hidden block py-10'>
          <span className='text-textGoldColor font-semibold'>About Us</span>

          <p className='text-black text-4xl font-bold pt-5' >CORE VALUES</p>
          <div className='h-1.5 w-28 bg-textGoldColor mt-3' />

          <div className='py-8 flex justify-center items-center  flex-col '>
            {aboutUs?.map(about => (
              <React.Fragment key={about.id}>
                <div className='flex md:px-14 px-0'>
                  <div className='h-[50%] w-[50%]'>
                    <img src={about.icon} alt={about.header} className='w-full h-full bg-center bg-cover ' />
                  </div>
                  <div className='md:pl-5'>
                    <span className='text-2xl font-bold block pb-3'>{about.header}</span>
                    <span className='text-justify text-base	pb-3 block' >{about.desc} </span>
                  </div>
                </div>

                <div className='py-10 h-max'>
                  <img src={about.img} alt={about.header} className='w-full h-full bg-center bg-cover ' />
                </div>
              </React.Fragment>
            ))}
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutAboutUs