import React from 'react'
import { LiaDollarSignSolid } from "react-icons/lia";
import { LuFuel } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { TbManualGearbox } from "react-icons/tb";
import { IoSpeedometerOutline } from "react-icons/io5";
function CarDetails({car}) {
    console.log(car)
  return (
    <div>
        <div className='p-32'>
            <h2 className='text-base md:text-5xl font-bold'>{car.listingTitle}</h2>
            <p className='py-4'>{car.tagline}</p>
            <div className='flex flex-row gap-2'>
                <div className='flex flex-row items-center gap-1 bg-gray-200 rounded-full px-3 py-2 text-sm'>
                    <LuFuel />
                    {car.fuelType}
                </div>
                <div className='flex flex-row items-center gap-1 bg-gray-200 rounded-full px-3 py-2 text-sm'>
                    <CiCalendar />
                    {car.posted}
                </div>
                <div className='flex flex-row items-center gap-1 bg-gray-200 rounded-full px-3 py-2 text-sm'>
                    <IoSpeedometerOutline />
                    {car.mileage}
                </div>
                <div className='flex flex-row items-center gap-1 bg-gray-200 rounded-full px-3 py-2 text-sm'>
                    <TbManualGearbox />
                    {car.transmission}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CarDetails
