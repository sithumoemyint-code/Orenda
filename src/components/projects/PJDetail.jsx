import React, { useEffect, useState } from 'react'
import projectList from '../../data/projectList.json'
import {BiSolidHomeCircle} from 'react-icons/bi'
import {GoDotFill} from 'react-icons/go'

const PJDetail = ({detailId}) => {
    const id = parseInt(detailId)
    const [detailInfo, setDetailInfo] = useState(null)
    
    useEffect(() => {
        const result = projectList.find(obj => obj.id === id)
        setDetailInfo(result)

        return
    }, [projectList, id])
    
    return (
        <div>
            <div className='h-[240px] w-full m-auto relative'>
                <div style={{ backgroundImage: `url(${detailInfo?.img})` }}  className='w-full h-full bg-center bg-cover object-cover duration-500' />
                <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center flex-col justify-center'>
                    <p className='text-white md:text-3xl text-2xl font-semibold'>{detailInfo?.title}</p>
                    <div className='h-1.5 w-28 bg-white mt-3' />
                </div>
            </div>

            <div className='py-6'>
                <div className='global-container'>
                    <div className='flex items-center text-textGoldColor font-bold	'>
                        <BiSolidHomeCircle size={20} />
                        <span className='md:text-base text-sm'> {" >>"} Projects {">>"} {detailInfo?.title} </span>
                    </div>

                    <div className='py-8'>
                        <div className='grid md:grid-cols-2 grid-cols-1'>
                            <div className='w-full'>
                                <img src="https://orenda.vn/wp-content/uploads/2022/10/du-an-img-15.png" className='w-full h-full bg-center bg-cover object-cover duration-500' alt={detailInfo?.title} />
                            </div>
                            <div className='md:pt-0 pt-10'>
                                <div className='flex items-start'>
                                    <span className='text-textGoldColor pt-1'> 
                                        <GoDotFill /> 
                                    </span> 
                                    <span>{detailInfo?.des1}</span>
                                </div>

                                <div className='flex items-start py-10'>
                                    <span className='text-textGoldColor pt-1'> 
                                        <GoDotFill /> 
                                    </span> 
                                    <span>{detailInfo?.des2}</span>
                                </div>
                            </div>
                        </div>

                        <div className='relative'>
                            <div className='grid md:grid-cols-2 md:py-10 py-0 '>
                                <div className=''>
                                </div>
                                <div className='w-full z-10 md:block hidden'>
                                    <img src="https://orenda.vn/wp-content/uploads/2022/10/du-an-img-17.png" className='w-full h-full bg-center bg-cover object-cover duration-500' alt={detailInfo?.title} />
                                </div>
                            </div>

                            <div className='md:absolute rounded md:bg-[#FCA206] bg-white  w-[98%] lg:top-32 top-20 right-0 z-0 pt-10 md:pl-20 pl-0 pb-5'>
                                <div className='grid md:grid-cols-2'>
                                    <div className=''>
                                        <span className='md:text-white text-black md:pt-10 pt-0'>
                                            {detailInfo?.des3}
                                        </span>
                                    </div>
                                    <div />
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PJDetail