import React from 'react'

const OurPeople = () => {
  return (
    <div>
      <div className='h-[850px] w-full m-auto relative'>
        <div style={{ backgroundImage: `url(https://orenda.vn/wp-content/uploads/2022/10/ve-orenda-img-23.png)` }}  className='w-full h-full bg-center bg-cover duration-500' />
        <div className='absolute top-0 left-0 right-0 bottom-0 '>
          <div className='global-container'>
            <div className=' flex items-center flex-col justify-center pt-4'>
              <p className='text-white text-4xl font-semibold text-center' >Our People</p>
              <div className='h-1.5 w-28 bg-white mt-3' />
            </div>
            <div className='h-[460px] w-max'>
              <img src="https://orenda.vn/wp-content/uploads/2022/10/ve-orenda-img-18.png" alt="upload" className='w-full h-full bg-center bg-cover duration-500' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurPeople