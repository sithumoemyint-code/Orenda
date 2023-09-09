import React from 'react'

const AboutVision = () => {
  return (
    <div className='h-[520px] w-full m-auto relative'>
      <div style={{ backgroundImage: `url(https://orenda.vn/wp-content/uploads/2022/10/ve-orenda-img-3.jpg)` }} className='w-full h-full bg-center bg-cover' />

      <div className='absolute top-0 left-0 right-0 bottom-0'>
          <div className='grid md:grid-cols-2 grid-cols-1  '>
            <div className='md:block hidden'>
            </div>
            <div className='bg-black-600 bg-black h-[520px] w-full opacity-70 p-10'>
              <p className=' font-semibold text-white text-4xl' >VISION</p>
              <div className='h-1.5 w-36 bg-cutBGColor mt-3' />
              <div className='pt-10 w-10/12'>
                <p className='text-white text-justify text-base'>Orenda aims to become the leading information -technology company in Vietnam, marking our name among the Asia – Pacific region and all over the world. We focus on developing software products and information technology systems which are “Intelligent – Qualified – User – oriented”,to save time, costs and resources of the society.</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default AboutVision