import React from 'react'
import orendas from '../../data/orenda.json'
import Slider from 'react-slick'

const OrendaName = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
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
        <div className='bg-lineGoldColor'>
            <div className='global-container'>
                <div className='mt-10 flex flex-col justify-center items-center '>
                    <p className='text-2xl font-bold text-white'>Orenda’s News</p>
                    <div className='h-1.5 w-28 bg-white mt-3' />
                </div>

                <>
                    <Slider {...settings}>
                        {orendas?.map(orenda => (
                            <div className='card'>
                                <div className='card-top'>
                                    <img src={orenda.imgUrl} alt={orenda.title} width="50%" height="50%" />
                                    <h1>{orenda.title}</h1>
                                </div>
                                <div className='card-bottom'>
                                    <h1>{orenda.title}</h1>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    
                </>
            </div>
        </div>
    )
}

export default OrendaName