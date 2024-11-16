import React, { useEffect, useState } from 'react'
import { FaRegSquareCheck } from "react-icons/fa6";

function CarFeatures({features}) {
    let feature = {leatherSeats: true, panoramicMoonroof: true, tachometer: true};

    
    if (features.features && typeof features.features === 'object') {
      } else {
        console.log("features is null or undefined");
      }

  return (
    <div>
        <h2 className='text-lg md:text-2xl font-medium'>Car Features</h2>

        {/* {Object.entries(features)} */}
      <div className='flex flex-row gap-2 items-center' >
          <FaRegSquareCheck /> 
      </div>  
    </div>
  )
}

export default CarFeatures
