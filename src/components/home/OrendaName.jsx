import React from 'react'
import orendas from '../../data/orenda.json'
import Slider from 'react-slick'
import { AiFillClockCircle, AiOutlineArrowRight } from "react-icons/ai"
import { BsFillPersonFill } from 'react-icons/bs'

const OrendaName = () => {

  const truncateText = (str, num) => {
    if (str.length > num) return str.slice(0, num) + '...'
    else return str
  }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }

    return (
      <div className='bg-lineGoldColor py-10'>
          <div className='global-container my-16'>
              <div className=' flex flex-col justify-center items-center '>
                  <p className='text-4xl font-bold text-white'>Orenda’s News</p>
                  <div className='h-1.5 w-28 bg-white mt-3' />
              </div>

              <div className='my-8'>
                <Slider {...settings}>
                  {orendas?.map(orenda => (
                    <div className='relative' key={orenda.id}>
                      <div className='border bg-white rounded overflow-hidden  p-5 '>
                        <div className='card-top cursor-pointer hover:scale-105 ease-in-out duration-300 h-64'>
                          <img src={orenda.imgUrl} className='h-64	object-cover ' alt={orenda.title} width="100%" height="100%" />
                        </div>
                        
                        <div className='mt-5'>
                          <div className='flex gap-8'>
                            <span className='text-textGray text-sm flex items-center gap-1'>
                              <span className='text-textGoldColor'>
                                <AiFillClockCircle size={18} />
                              </span>
                              {orenda.date}
                            </span>
                            <span className='text-textGray text-sm flex items-center gap-1'>
                              <span className='text-textGoldColor'>
                                <BsFillPersonFill size={18} />
                              </span>
                              {orenda.person}
                            </span>
                          </div>

                          <div className='mt-5'>
                            <p className='cursor-pointer font-bold hover:text-textGoldColor transition-colors duration-300'>
                              <span>
                                {truncateText(orenda.title, 50)}
                              </span>
                            </p>
                          </div>

                          <div className='mt-5 bg-btnGoldColor flex items-center gap-2 w-32 p-2 cursor-pointer rounded text-white'>
                            <span  className='pl-2 text-sm '>SEE DETAIL</span>
                            <AiOutlineArrowRight color='white' />
                          </div>
                        </div>

                      </div>
                      
                      <div className='bg-newBgColor w-14 p-1 absolute top-5 -left-1 '>
                        <p className='pl-2'>NEW</p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
          </div>
      </div>
    )
}

export default OrendaName