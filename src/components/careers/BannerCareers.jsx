import React from 'react'

const BannerCareers = () => {
  return (
    <div className='relative'>
      <div className='h-[350px] w-full m-auto '>
        <div style={{ backgroundImage: `url(https://orenda.vn/wp-content/uploads/2022/10/tuyen-dung-img-1.png)` }}  className='w-full h-full bg-center bg-cover duration-500' />
      </div>
      <div className=''>
        <div className='absolute top-5 left-0 right-0 bottom-0 flex items-center flex-col'>
          <p className='text-white text-4xl font-bold text-center' >WELCOME TO ORENDA</p>
          <p className='text-white text-xl font-semibold text-center pt-6'>JOIN OUR TEAM – THE TOP LEADING SOFTWARE COMPANY IN VIETNAM</p>
        </div>

        <div className='global-container'>
          <div className='absolute bottom-0 left-0'>
            <div className='h-[260px]'>
              <img src='https://orenda.vn/wp-content/uploads/2022/10/tuyen-dung-img-1a.png' className='w-full h-full bg-center bg-cover ' />
            </div>
          </div>
          <div className='absolute bottom-0 right-0'>
            <div className='h-[260px]'>
              <img src='https://orenda.vn/wp-content/uploads/2022/10/tuyen-dung-img-1b.png' className='w-full h-full bg-center bg-cover ' />
            </div>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default BannerCareers