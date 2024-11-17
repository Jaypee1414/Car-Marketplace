import React from "react";
import { LiaCarSolid } from "react-icons/lia";
import { IoSpeedometerOutline } from "react-icons/io5";
import { LuFuel } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { TbAutomaticGearbox } from "react-icons/tb";
import { PiSteeringWheelBold } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { PiEngine } from "react-icons/pi";
import { GiCarDoor } from "react-icons/gi";
import { FaGears } from "react-icons/fa6";
import { VscSymbolColor } from "react-icons/vsc";
import { ImInsertTemplate } from "react-icons/im";
import { Separator } from "@radix-ui/react-select";
function CarSpec({ car }) {
  console.log(car);
  return (
    <div className="p-6">
      <div className="flex flex-col gap-3 w-[100%]">
        <h2 className=" text-xl md:text-2xl underline font-bold pb-2">Specification</h2>
        <div className="flex flex-row justify-between  items-center">
          <div className="flex flex-row items-center gap-3">
            <LiaCarSolid className="text-base md:text-xl" />
            <p>Body</p>
          </div>
          <div className="mr-10">{car.make}</div>
        </div>
        <div className="flex flex-row justify-between  items-center">
          <div className="flex flex-row items-center gap-3">
            <IoSpeedometerOutline className="text-base md:text-xl" />
            Mileage
          </div>
          <div className="mr-10">{car.mileage}</div>
        </div>
        <div className="flex flex-row justify-between  items-center">
          <div className="flex flex-row items-center gap-3">
            <LuFuel className="text-base md:text-xl" />
            Fuel type
          </div>
          <div className="mr-10">{car.fuelType}</div>
        </div>
        <div className="flex flex-row justify-between  items-center">
          <div className="flex flex-row items-center gap-3">
            <CiCalendar className="text-base md:text-xl" />
            Year
          </div>
          <div className="mr-10">{car.year}</div>
        </div>
        <div className="flex flex-row justify-between  items-center">
          <div className="flex flex-row items-center gap-3">
            <TbAutomaticGearbox className="text-base md:text-xl" />
            Transmission
          </div>
          <div className="mr-10">{car.transmission}</div>
        </div>
        <div className="flex flex-row justify-between  items-center">
          <div className="flex flex-row items-center gap-3">
            <CiUser className="text-base md:text-xl" />
            Condition
          </div>
          <div className="mr-10">{car.condition}</div>
        </div>
        <div className="flex flex-row justify-between  items-center">
          <div className="flex flex-row items-center gap-3">
            <PiEngine className="text-base md:text-xl" />
            Engine size
          </div>
          <div className="mr-10">{car.engineSize}</div>
        </div>
        <div className="flex flex-row justify-between  items-center">
          <div className="flex flex-row items-center gap-3">
            <GiCarDoor className="text-base md:text-xl" />
            Door
          </div>
          <div className="mr-10">{car.door}</div>
        </div>
        <div className="flex flex-row justify-between  items-center">
          <div className="flex flex-row items-center gap-3">
            <FaGears className="text-base md:text-xl" />
            Cylinder
          </div>
          <div className="mr-10">{car.engineSize}</div>
        </div>
        <div className="flex flex-row justify-between  items-center">
          <div className="flex flex-row items-center gap-3">
            <VscSymbolColor className="text-base md:text-xl" />
            Color
          </div>
          <div className="mr-10">{car.color}</div>
        </div>
        <div className="flex flex-row justify-between  items-center">
          <div className="flex flex-row items-center gap-3">
            <PiSteeringWheelBold className="text-base md:text-xl" />
            Drive type
          </div>
          <div className="mr-10">{car.driveType}</div>
        </div>
        <div className="flex flex-row justify-between  items-center">
          <div className="flex flex-row items-center gap-3">
            <ImInsertTemplate className="text-base md:text-xl" />
            Vin
          </div>
          <div className="mr-10">{car.vin}</div>
        </div>
      </div>
    </div>
  );
}

export default CarSpec;

// <div className='flex flex-col gap-2 '>
// <div className='flex flex-row justify-between w-full items-center gap-2'>
// <LiaCarSolid className='text-base md:text-xl'/>
//   <p>Body</p>
//   {car.make}
// </div>
// <div className='flex flex-row items-center gap-2'>
//   <IoSpeedometerOutline className='text-base md:text-xl'/>
//   Mileage
// </div>
// <div className='flex flex-row items-center gap-2'>
//   <LuFuel className='text-base md:text-xl'/>
//   Fuel type
// </div>
// <div className='flex flex-row items-center gap-2'>
//   <CiCalendar className='text-base md:text-xl'/>
//   Year
// </div>
// <div className='flex flex-row items-center gap-2'>
//   <TbAutomaticGearbox className='text-base md:text-xl'/>
//   Transmission
// </div>
// <div className='flex flex-row items-center gap-2'>
//   <CiUser className='text-base md:text-xl'/>
//   Condition
// </div>
// <div className='flex flex-row items-center gap-2'>
//   <PiEngine className='text-base md:text-xl'/>
//   Engine size
// </div>
// <div className='flex flex-row items-center gap-2'>
//   <GiCarDoor className='text-base md:text-xl'/>
//   Door
// </div>
// <div className='flex flex-row items-center gap-2'>
//   <FaGears className='text-base md:text-xl'/>
//   Cylinder
// </div>
// <div className='flex flex-row items-center gap-2'>
//   <VscSymbolColor className='text-base md:text-xl'/>
//   Color
// </div>
// <div className='flex flex-row items-center gap-2'>
//   <PiSteeringWheelBold className='text-base md:text-xl'/>
//   Drive type
// </div>
// <div className='flex flex-row items-center gap-2'>
//   <ImInsertTemplate className='text-base md:text-xl'/>
//   Vin
// </div>
// </div>
