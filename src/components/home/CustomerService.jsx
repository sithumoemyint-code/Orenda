import React from 'react'
import customerServices from '../../data/customerService.json'
import Slider from 'react-slick'

const CustomerService = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  }
    
  return (
    <div className='bg-[#F4F4F4]'>
        <div className='global-container my-16'>
            <div className=' flex flex-col justify-center items-center '>
              <p className='text-4xl font-bold '>Customers and partners</p>
              <div className='h-1.5 w-28 bg-lineGoldColor mt-3' />
            </div>
            <Slider {...settings}>
              {customerServices?.map((cs, index) => {
                return (
                  <div key={index}>
                    <img src={cs.icon} alt={cs.icon} width="60%" height="60%"  />
                  </div>
                )})
              }
            </Slider>
        </div>
    </div>
  )
}

export default CustomerService


{/* <div className='grid grid-cols-5 gap-10'> */}
{/* </div> */}