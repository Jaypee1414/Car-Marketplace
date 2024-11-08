import React, { useEffect, useState } from 'react'

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
    <div className='flex flex-col bg-slate-50 pt-3 mt-2 md:mt-10 rounded-3xl'>
      <div className='px-3 '>
        <img src={carImages[0]} className='w-full h-[250px] md:h-[600px] rounded-2xl' alt="Car Images" />
      </div>
      <div className='bg-white m-3 p-5 rounded-3xl'>
        <div className='text-lg md:text-2xl font-medium'>
            Description
        </div>
        <div className='pt-5'>
            {car.listingDescription}
        </div>
      </div>
    </div>
  )
}

export default CarDescription
