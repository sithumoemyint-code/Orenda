import React from 'react'
import projectList from '../../data/projectList.json'

const PJCard = () => {
    
    return (
        <div className='py-10'>
            <div className='global-container'>
                <div className='grid grid-cols-3 gap-2 '>
                    {projectList?.map(list => (
                        <div key={list.id} className='cursor-pointer bg-white p-4  hover:-translate-y-4 ease-in-out duration-300'>
                            <div className='h-[276px] rounded overflow-hidden'>
                                <div style={{ backgroundImage: `url(${list.img})` }}  className='w-full h-full bg-center bg-cover duration-500' />
                            </div>
                            <div className='text-center py-4'>
                                <p className='text-base font-bold '>{list.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PJCard