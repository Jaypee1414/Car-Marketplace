import { Separator } from '@radix-ui/react-select'
import React from 'react'
import { TbManualGearboxFilled } from "react-icons/tb";
import { BsFuelPumpDieselFill } from "react-icons/bs";
import { IoLogoModelS } from "react-icons/io";
import { MdOpenInNew } from "react-icons/md";
function CarCard({ Car }) {
  return (
    <div className=' hover:shadow-lg cursor-pointer rounded-b-xl'>
      <img src={Car.image[0].imageURL} alt="" width={300} height={250} className='rounded-t-xl mt-10'/>
      <div className='p-4'>
        <h2 className='font-bold text-sm md:text-lg mb-2'>{Car.listingTitle}</h2>
        <Separator className='border-2'/>
        <div className='grid grid-rows-3 sm:grid-rows-none md:grid-cols-3 mt-5 mb-5'>
            <div className="flex flex-col item-center">
                <TbManualGearboxFilled className='text-xl md:text-2xl'/>   
                <h4>{Car.transmission}</h4>
            </div>
            <div className="flex flex-col item-center">
                <IoLogoModelS className='text-xl md:text-2xl'/>
                <h4>{Car.model}</h4>
            </div>
            <div className="flex flex-col item-center">
                <BsFuelPumpDieselFill  className='text-xl md:text-2xl'/>
                <h4>{Car.fuelType}</h4>
            </div>
        </div>
        <Separator className='border-2'/>
        <div className='flex flex-row justify-between my-5'>
            <h4 className='font-bold tex-md md:text-lg'>₱{Car.originalPrice} / hour</h4>
            <h2 className='text-indigo-600 text-sm flex gap-2 items-center cursor-pointer hover:shadow-sm'><MdOpenInNew /> View Details</h2>
        </div>
      </div>
    </div>
  )
}

export default CarCard
