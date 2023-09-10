import React, { useState } from 'react'
import foundationData from '../../data/foundationData.json'

const AboutFoundation = () => {
  const [sliderData, setSliderData] = useState(foundationData[0])

  const handleClick = index => {
    const slider = foundationData[index]
    setSliderData(slider)
  }
  
  return (
    <div className='py-10'>
      <div className='global-container'>
        <div className='mt-5 flex flex-col justify-center items-center '>
          <p className='text-2xl font-bold'>Foundation and Development</p>
          <div className='h-1.5 w-28 bg-lineGoldColor mt-3' />
        </div>

        <div className='py-5'>
          <div className='tab_lichsu'>
            {foundationData?.map(data => (
              <React.Fragment key={data.id} >
                <div className='tablinks' onClick={() => handleClick(data.id)}>
                  <div className={`presentation ${sliderData.id === data.id && 'presentation-active'} `} /> 
                  <div className='box'>{data.year}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
          
          <div>
            <div className=' h-[280px]'>
              <img src={sliderData.img} alt={sliderData.year} className='w-full h-full bg-center bg-cover object-cover '  />
            </div>

            <div className='flex justify-center items-center pt-6 '>
              <span className='text-[#616161] text-center font-bold'>{sliderData.des}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutFoundation