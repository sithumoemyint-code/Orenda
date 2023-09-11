import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const ProductContactService = () => {
  return (
    <div className='relative'>
      <div className='h-[150px] w-full m-auto '>
        <div style={{ backgroundImage: `url(https://orenda.vn/wp-content/themes/flatsome-child/img/gia-cong-img-11.png)` }}  className='w-full h-full bg-center bg-cover duration-500' />
      </div>
      <div className=' '>
        <div className='absolute top-0 left-0 right-0 bottom-0 py-10'>
          <div className='global-container'>
            <span className='text-xl font-bold'>Contact to use the service</span>
            <div className='mt-3 p-3 rounded bg-cutBGColor w-24 flex items-baseline text-white font-bold'>
              <span>Contact</span>
              <div className='pl-1'>
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductContactService