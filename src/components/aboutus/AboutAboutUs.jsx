import React from 'react'
import aboutUs from '../../data/aboutUs.json'

const AboutAboutUs = () => {

  return (
    <div className='bg-[#F4F4F4]'>
      <div className='global-container'>
        <div className='py-10 grid grid-cols-2 '>
          <div className=''>
            <div className=' w-[460px]'>
              <img src="https://orenda.vn/wp-content/uploads/2022/10/ve-orenda-img-5.png" alt="about" className='w-full h-full bg-center bg-cover duration-500' />
            </div>
          </div>
          
          <div className='pt-10 '>
            <div className='flex'>
              <div className=''>
                <img src="https://orenda.vn/wp-content/uploads/2022/10/ve-orenda-img-7.png" alt="" className='w-full h-full bg-center bg-cover duration-500' />
              </div>
              <div className='pl-5'>
                <span className='text-2xl font-bold'>Efficiency</span>
                <span className='pt-5'>Orenda always puts our clients at the center of everything we do: placing clients’ benefit and expectation as our first priority; striving to deliver the most perfect products to our customers; consider their satisfaction as a measurement of efficiency.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutAboutUs