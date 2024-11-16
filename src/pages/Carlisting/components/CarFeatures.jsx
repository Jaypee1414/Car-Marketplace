import React, { useEffect, useState } from 'react'
import { FaRegSquareCheck } from "react-icons/fa6";

function CarFeatures({features}) {
    let featureDisplay = ''


    // if () {
    //   Object.entries(features.features).map(([key,value])=>{
    //     featureDisplay += `<div className='flex flex-row gap-2 items-center' >
    //   <FaRegSquareCheck /> 
    //   <div>
    //     ${key}
    //   </div>
    // </div>` 
    //   })
    // } else {
    //   console.log("features is null or undefined");
    // }

  return (
    <div>
        <h2 className='text-lg md:text-2xl font-medium'>Car Features</h2>
        {(features.features && typeof features.features === 'object') && Object.entries(features.features).map(([key,value])=>{
          return(
            <div className='flex flex-row gap-2 items-center' >
                <FaRegSquareCheck /> 
                <div>
                  {key}
                </div>
            </div>
          )
        })}
    </div>
  )
}

export default CarFeatures
