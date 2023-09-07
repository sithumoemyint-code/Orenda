import React from 'react'
import chooses from '../../data/choose.json'

const Choose = () => {
    
    return (
        <div>
            <div className=' global-container'>
                <div className='shadow-md my-8 grid md:grid-cols-2 grid-cols-1 py-10'>
                    <div className='flex justify-center items-center'>
                        <img src="https://orenda.vn/wp-content/uploads/2022/10/orenda-l2.png" alt="" width="60%" height="60%" />
                    </div>
                    <div className='md:mt-0 mt-5'>
                        <div className=''>
                            <p className='text-4xl font-semibold'>WHY CHOOSE ORENDA</p>
                            <div className='h-1.5 w-28 bg-lineGoldColor mt-3' />
                        </div>
                        <div>
                            <p className='pt-5'>After years of development, Orenda has achieved progressive success in providing information technology solutions to business administration, business management, public administration and mobile application.</p>
                            <div className='pt-5 grid grid-cols-2 gap-4'>
                                {chooses?.map(choose => (
                                    <div className='flex gap-3 mb-4' key={choose.id}>
                                        <img src={choose.icon} alt="" width="20%" height="20%" />
                                        <div className='flex flex-col'>
                                            <p className='text-4xl font-semibold '>{choose.number}</p>
                                            <p className='text-[#616161]'>{choose.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Choose