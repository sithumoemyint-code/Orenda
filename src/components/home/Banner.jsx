import React, { useCallback, useEffect, useState } from 'react'
import banners from '../../data/banner.json'
import { RxDotFilled } from 'react-icons/rx'

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = useCallback(() => {
        const index = currentIndex + 1 === banners.length ? 0 : currentIndex + 1
        setCurrentIndex(index)
    }, [currentIndex, banners])

    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex)
    }

    useEffect(() => {
        const slideAuto = setInterval(() => {
            nextSlide()
        }, 5000)
        return () => {
            clearInterval(slideAuto)
        }
    }, [nextSlide])
    
    return (
        <div  className='relative'>
            <div className={`h-[580px] w-full m-auto  group `}>
                <div style={{backgroundImage: `url(${banners[currentIndex].url})`}} className='w-full h-full bg-center bg-cover duration-500' />
            </div>

            <div className='flex justify-center items-center absolute py-2 bottom-0 w-full  '>
                {banners?.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slide.id)}
                        className={`text-2xl cursor-pointer ${slide.id === currentIndex ? 'text-gray-400' : 'text-gray-900' } `}
                    >
                        <RxDotFilled size={40} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Banner