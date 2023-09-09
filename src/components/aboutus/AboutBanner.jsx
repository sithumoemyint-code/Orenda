import React from 'react'

const AboutBanner = () => {
  return (
    <div>
      <div className='h-[240px] w-full m-auto relative'>
        <div style={{ backgroundImage: `url(https://orenda.vn/wp-content/uploads/2022/10/ve-orenda-img-1.png)` }}  className='w-full h-full bg-center bg-cover duration-500' />
          <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center flex-col justify-center'>
              <p className='text-white text-4xl font-semibold text-center' >ORENDA Vietnam’s top leading software company</p>
              <div className='h-1.5 w-28 bg-white mt-3' />
          </div>
      </div>
    </div>
  )
}

export default AboutBanner