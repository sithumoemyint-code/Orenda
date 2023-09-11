import React from 'react'
import './products.css'

const ProductBanner = () => {
  return (
    <div className='relative'>
      <div className='h-[400px] w-full m-auto '>
        <div style={{ backgroundImage: `url(https://orenda.vn/wp-content/uploads/2022/10/bnsp.png)` }}  className='w-full h-full bg-center bg-cover duration-500' />
      </div>
      <div className='global-container '>
        <div className='absolute top-0 left-0 right-0 bottom-0 p-28 md:block hidden'>
          <span className='circle absolute'></span>
          <span className='circle1'></span>
        </div>
        <div className='absolute top-36 md:left-36 sm:left-20 left-10 right-0 bottom-0 sm'>
          <p className='sm:text-white text-black text-4xl font-semibold'>PROJECTS</p>
          <div className='h-1.5 w-28 sm:bg-white bg-black mt-3 ml-6' />
        </div>
      </div>
      
    </div>
    
  )
}

export default ProductBanner