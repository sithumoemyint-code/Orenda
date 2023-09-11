import React, { useState } from 'react'
import {BiSolidHomeCircle} from 'react-icons/bi'
import productListDetails from '../../data/productListDetails.json'

const ProductList = () => {
  const [sliderData, setSliderData] = useState(productListDetails[0])

  const handleClick = index => {
    const slider = productListDetails[index]
    setSliderData(slider)
  }

  return (
    <div className=''>
      <div className='global-container '>
        <div className='flex items-center text-textGoldColor font-bold	py-10'>
          <BiSolidHomeCircle size={20} />
          <span className='md:text-base text-sm'> {" >>"} Products  </span>
        </div>

        <div className='py-10 global-container'>
          <div className='grid md:grid-cols-4 grid-cols-2 gap-4'>
            {productListDetails?.map(detail => (
              <React.Fragment key={detail.id}>
                <div className={`border-dashed  rounded flex justify-center cursor-pointer px-2 py-3 ${detail?.id === sliderData?.id ? "bg-btnGoldColor border-btnGoldColor shadow-lg text-white" : "border-4" }`} onClick={() => handleClick(detail.id)}>
                  <span className='text-center font-semibold'>{detail?.title}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className='mt-10' />
      <div className='py-10 bg-[#F3F3F3]'>
        <div className='global-container px-8'>
          <div className='flex '>
            <div className='h-max  w-2/5 '>
              <img src={sliderData?.img} alt={sliderData?.header1} className='w-full h-full bg-center bg-cover ' />
            </div>
            <div className='w-3/5'>
              {sliderData?.img1 !== "" && (
                <div className='max-h-[400] flex justify-center '>
                  <img src={sliderData?.img1} alt={sliderData?.header1} className='w-[70%] h-[70%] bg-center bg-cover ' />
                </div>
              )}
            </div>
          </div>

          <div className='py-10'>
            <div className='text-[#616161]'>
              <span className='text-2xl	font-bold	'>{sliderData?.header1}</span>
            </div>
            <div className='mt-2'>
              <span className='text-2xl	font-bold	text-textGoldColor'>{sliderData?.header2}</span>
              <div className='h-1 w-28 bg-textGoldColor mt-1 ' />
            </div>
            <div className='mt-2'>
              <span>{sliderData?.des}</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default ProductList