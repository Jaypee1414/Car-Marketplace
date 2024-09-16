import { Separator } from '@radix-ui/react-select'
import React from 'react'
import { TbManualGearboxFilled } from "react-icons/tb";
import { BsFuelPumpDieselFill } from "react-icons/bs";
import { IoLogoModelS } from "react-icons/io";
import { MdOpenInNew } from "react-icons/md";
function CarCard({ Car }) {
  return (
    <div className=' hover:shadow-md cursor-pointer rounded-b-xl'>
      <img src={Car.image} alt="" width={300} height={250} className='rounded-t-xl mt-10'/>
      <div className='p-4'>
        <h2 className='font-bold text-lg mb-2'>{Car.name}</h2>
        <Separator className='border-2'/>
        <div className='grid grid-cols-3 mt-5 mb-5'>
            <div className="flex flex-col item-center">
                <TbManualGearboxFilled className='text-2xl'/>   
                <h4>{Car.gearType}</h4>
            </div>
            <div className="flex flex-col item-center">
                <IoLogoModelS className='text-2xl'/>
                <h4>{Car.model}</h4>
            </div>
            <div className="flex flex-col item-center">
                <BsFuelPumpDieselFill  className='text-2xl'/>
                <h4>{Car.fuel}</h4>
            </div>
        </div>
        <Separator className='border-2'/>
        <div className='flex flex-row justify-between my-5'>
            <h4 className='font-bold text-lg'>₱{Car.price} / hour</h4>
            <h2 className='text-indigo-600 text-sm flex gap-2 items-center cursor-pointer hover:shadow-sm'><MdOpenInNew /> View Details</h2>
        </div>
      </div>
    </div>
  )
}

export default CarCard