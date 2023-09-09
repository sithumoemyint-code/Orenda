import React from 'react'

const AboutUs = () => {
  return (
    <>
      <div className='py-10 grid grid-cols-2 gap-8'>
        <div className=''>
          <div className=' w-[420px]'>
            <img src="https://orenda.vn/wp-content/uploads/2022/10/ve-orenda-img-5.png" alt="about" className='w-full h-full bg-center bg-cover duration-500' />
          </div>

          <div className='pt-10'>
            <div className='flex'>
              <div className='h-[70%] w-[70%]'>
                <img src="https://orenda.vn/wp-content/uploads/2022/10/ve-orenda-img-7.png" alt="" className='w-full h-full bg-center bg-cover ' />
              </div>
              <div className='pl-5'>
                <span className='text-2xl font-bold block pb-3'>Efficiency</span>
                <span className='text-justify text-base	pb-3 block' >Orenda always puts our clients at the center of everything we do: placing clients’ benefit and expectation as our first priority; striving to deliver the most perfect products to our customers; consider their satisfaction as a measurement of efficiency.</span>
                <span className='pt-5 text-justify text-base	pb-3'>We believe creativity is the source of vitality and the lever to development from which creates unique value and identity for each product. Orenda’s quality products save resources for clients, society and support people to work effectively while saving time.</span>
              </div>
            </div>
          </div>

          <div className=' w-[420px] pt-10'>
            <img src="https://orenda.vn/wp-content/uploads/2022/10/ve-orenda-img-9.png" alt="about" className='w-full h-full bg-center bg-cover duration-500'  />
          </div>
        </div>

        <div className='pt-10 '>
          <span className='text-textGoldColor font-semibold'>About Us</span>

          <p className='text-black text-4xl font-bold pt-5' >CORE VALUES</p>
          <div className='h-1.5 w-28 bg-textGoldColor mt-3' />

          <div className='pt-10'>
            <div className='flex'>
              <div className='h-[70%] w-[70%]'>
                <img src="https://orenda.vn/wp-content/uploads/2022/10/ve-orenda-img-6.png" alt="" className='w-full h-full bg-center bg-cover ' />
              </div>
              <div className='pl-5'>
                <span className='text-2xl font-bold block pb-3'>Reputation</span>
                <span className=' text-justify text-base	pb-3 block' >Reputation is our honor and is the most solid foundation to implement Orenda’s Mission and Vision. We practice reputation by making every effort to fulfill commitments on product quality, implementation progress and handover.</span>
              </div>
            </div>
          </div>

          <div className=' w-[420px] pt-10 '>
            <img src="https://orenda.vn/wp-content/uploads/2022/10/ve-orenda-img-9.png" alt="about" className='w-full h-full bg-center bg-cover duration-500'  />
          </div>

          <div className='pt-10'>
            <div className='flex'>
              <div className='h-[100%] w-[100%]'>
                <img src="https://orenda.vn/wp-content/uploads/2022/10/ve-orenda-img-10.png" alt="" className='w-full h-full bg-center bg-cover ' />
              </div>
              <div className='pl-5'>
                <span className='text-2xl font-bold block pb-3'>Responsibility to people</span>
                <span className=' text-justify text-base	pb-3 block' >Pursuing our mission“For a happier life” – Orenda always considers our people as the most value asset. At Orenda, we emphasize on building a unified, professional working environment; offering conditions to improve each and every staff’s capability as well as creating equal development opportunities for everyone. The journey leading to a happier life for people begins with the happiness of all Orenda.</span>
                <span className=' text-justify text-base	 block'>We always put humanity first in cooperation and coordination with partners and clients. We participate actively in contributing to a happier society.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default AboutUs