import React from 'react'
import {BiSolidHomeCircle} from 'react-icons/bi'
import intro from '../../data/aboutintroductions.json'

const AboutIntroduction = () => {

  return (
    <div className='py-5'>
      <div className='global-container'>
        <div className='flex items-center text-textGoldColor font-bold	'>
          <BiSolidHomeCircle size={20} />
          <span className='md:text-base text-sm'> {" >>"} About Us  </span>
        </div>

        <div>
          <div className='mt-5 flex flex-col justify-center items-center '>
            <p className='text-2xl font-bold'>Introduction</p>
            <div className='h-1.5 w-28 bg-lineGoldColor mt-3' />

            <div className='py-8'>
              <div className='grid md:grid-cols-2 grid-cols-1'>
                {intro?.map(intro => (
                  <React.Fragment key={intro.id}>
                    <div className='pr-8'>
                      <div className='mb-3'>
                        <span className='text-lg text-justify	text-[#505560] '>{intro.title1}</span>
                      </div>
                      <div className='mb-3'>
                        <span className='text-lg text-justify	text-[#505560] '>{intro.title2}</span>
                      </div>
                      <div className='mb-3'>
                        <span className='text-lg text-justify	text-[#505560] '>{intro.title3}</span>
                      </div>
                    </div>
                    <div className='md:mt-0 mt-5 h-min'>
                      <img src="https://orenda.vn/wp-content/uploads/2022/10/ve-orenda-2022-1-scaled.jpg" alt="hello"  className='w-full h-full bg-center bg-cover duration-500' />
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutIntroduction