import React, { useEffect, useState } from 'react'
import CarFeatures from './CarFeatures'

function CarDescription({car}) {
    const [carImages, setCarImages] = useState([])

    useEffect(()=>{
        getCarImages()
    },[car])

    const getCarImages = () =>{
        car?.image?.forEach(carImages => {
            setCarImages( prev => [...prev, carImages.imageURL])
        })
    }
    
  return (
    <div className='flex flex-col pt-3 mt-2 md:mt-10 rounded-3xl'>
      <div className='p-1 shadow-slate-200 border-2 border-slate-200 shadow-md rounded-sm'>
        <img src={carImages[0]} className='w-full h-[250px] md:h-[600px] rounded-sm' alt="Car Images" />
      </div>
      <div className=' my-1 p-5 shadow-slate-200 border-2 border-slate-200 shadow-md rounded-md'>
        <h2 className='text-lg md:text-2xl font-medium'>
            Description
        </h2>
        <div className='pt-5'>
            {car.listingDescription}
        </div>
      </div>
       <div className='p-5 my-1shadow-slate-200 border-2 border-slate-200 shadow-md rounded-md'>
            <CarFeatures features={car}/>
        </div>
    </div>
  )
}

export default CarDescription
