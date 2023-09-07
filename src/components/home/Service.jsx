import React, {  useState } from 'react'
import service from '../../data/service.json'
import { BsMicrosoft, BsMicrosoftTeams } from "react-icons/bs"
import { FaAccusoft } from "react-icons/fa"


const Service = () => {
    const [sliderData, setSliderData] = useState(service[0])

    const handleClick = index => {
        const slider = service[index]
        setSliderData(slider)
    }
    
    return (
        <div className=''> 
            <div className='global-container'>
                <div className='mt-10 flex flex-col justify-center items-center '>
                    <p className='text-2xl font-bold'>SERVICE</p>
                    <div className='h-1.5 w-28 bg-lineGoldColor mt-3' />
                </div>
                
                <div className='flex gap-10 justify-center items-center cursor-pointer mt-8 md:mx-8 mx-0'>
                    {service?.map(ser => (
                        <div key={ser.id} className={`cursor-pointer border-2 border-btnGoldColor p-4 w-[454px] ${ser.id === sliderData.id ? 'bg-btnGoldColor service-opacity' : ''}`} onClick={() => handleClick(ser.id)}>
                            <div className={`flex justify-center items-center pb-6 ${ser.id === sliderData.id ? 'text-white' : ''}`}>
                                {ser.icon === 'BsMicrosoft' && <BsMicrosoft size={30} />}
                                {ser.icon === 'BsMicrosoftTeams' && <BsMicrosoftTeams size={30} />}
                                {ser.icon === 'FaAccusoft' && <FaAccusoft size={30} />}
                            </div>
                            
                            <p className={`text-center font-bold ${ser.id === sliderData.id ? 'text-white' : ''}`}>{ser.header} </p>
                        </div>
                    ))}
                </div>

                <div className='my-10  gap-10 grid md:grid-cols-5 grid-cols-1'>
                    <div className='md:col-span-2 col-span-1'>
                        <img src={sliderData.img} alt="" width="100%" />
                    </div>
                    <div className='md:mt-20 mt-5 md:col-span-3 col-span-1 relative'>
                        <div className='flex justify-between '>
                            <p className='text-8xl text-btnGoldColor font-semibold pb-5 '>{sliderData.id + 1 }</p>
                            <div className='absolute top-0 right-0'>
                                <img src="https://orenda.vn/wp-content/themes/flatsome-child/img/dich-vu-img-dot.png" alt="" />
                            </div>
                            
                        </div>
                        
                        <p className='font-semibold text-2xl pb-5'>{sliderData.header}</p>
                        <p>{sliderData.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service