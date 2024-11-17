import React, { useEffect, useState } from 'react'
import { FaRegSquareCheck } from "react-icons/fa6";

function CarFeatures({features}) {
    let featureDisplay = ''
  return (
    <div>
      <h2 className='text-xl md:text-2xl font-bold '>Car Features</h2>
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 p-3 md:p-5'>
          {(features.features && typeof features.features === 'object') && Object.entries(features.features).map(([key,value])=>{
            return(
              <div className='flex flex-row gap-2 items-center pb-2' >
                  <FaRegSquareCheck /> 
                  <div>
                    {key}
                  </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default CarFeatures
