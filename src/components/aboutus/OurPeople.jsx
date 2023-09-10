import React from 'react'

const OurPeople = () => {
  return (
    <div>
      <div className='md:h-[750px] h-[1250px] w-full m-auto relative'>
        <div style={{ backgroundImage: `url(https://orenda.vn/wp-content/uploads/2022/10/ve-orenda-img-23.png)` }}  className='w-full h-full bg-center bg-cover ' />
        <div className='absolute top-0 left-0 right-0 bottom-0 '>
          <div className='global-container'>
            
            <div className='md:block hidden'>
              <div className='flex py-16 '>
                <div className='h-[460px] w-2/6'>
                  <img src="https://orenda.vn/wp-content/uploads/2022/10/ve-orenda-img-18.png" alt="upload" className='w-full h-full bg-center bg-cover ' />
                </div>
                <div className='w-4/6 relative'>
                  <div className=' flex items-center flex-col justify-center pt-4'>
                    <p className='text-white text-4xl font-semibold ' >Our People</p>
                    <div className='h-1.5 w-28 bg-white mt-3' />
                  </div>
                  <div className='pt-10'>
                    <div className='p-8 bg-white max-w-xl relative left-[-30px] rounded shadow-lg'>
                      <div className='mb-2'>
                        <span className='text-4xl block text-textGoldColor font-bold'>100%</span>
                      </div>
                      
                      <span className='text-base text-[#424242] font-bold '>Technicians graduated from Vietnam’s top technology universities</span>
                    </div>
                  </div>
                  
                  <div className='mt-16 absolute left-[-70px] flex'>
                    <div className='max-h-72 max-w-sm m-auto  '>
                      <img src="https://orenda.vn/wp-content/uploads/2022/10/ve-orenda-img-20.png" alt="img" className='w-full h-full bg-center bg-cover '  />
                    </div>
                    <div className='mt-16'>
                      <div className='p-8 bg-white max-w-xl relative left-[-60px] rounded shadow-lg'>
                        
                        <span className='text-base text-[#424242] font-bold '>Well-qualified BA and QA experts, fluent in different languages</span>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            
            <div className='block md:hidden'>
              <div className=' flex items-center flex-col justify-center pt-4'>
                <div className='flex items-center flex-col justify-center'>
                  <p className='text-white text-4xl font-semibold ' >Our People</p>
                  <div className='h-1.5 w-28 bg-white mt-3' />
                </div>

                <div className='mt-8'>
                  <div className='h-[460px] w-max '>
                    <img src="https://orenda.vn/wp-content/uploads/2022/10/ve-orenda-img-18.png" alt="upload" className='w-full h-full bg-center bg-cover ' />
                  </div>
                </div>
                
                <div className='pt-5'>
                  <div className='p-8 bg-white max-w-xl rounded shadow-lg'>
                    <div className='mb-2'>
                      <span className='text-4xl block text-textGoldColor font-bold'>100%</span>
                    </div>
                    
                    <span className='text-base text-[#424242] font-bold '>Technicians graduated from Vietnam’s top technology universities</span>
                  </div>
                </div>

                <div className='pt-5'>
                  <div className='max-h-72 max-w-sm m-auto  '>
                    <img src="https://orenda.vn/wp-content/uploads/2022/10/ve-orenda-img-20.png" alt="img" className='w-full h-full bg-center bg-cover '  />
                  </div>
                  <div className='mt-5'>
                      <div className='p-8 bg-white max-w-xl  rounded shadow-lg'>
                        
                        <span className='text-base text-[#424242] font-bold '>Well-qualified BA and QA experts, fluent in different languages</span>
                      </div>
                    </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurPeople