import React from 'react'
import Price from './Price'
function RightCarDescription({car}) {
  return (
    <div className='flex flex-col pt-3 mt-2 md:mt-10 rounded-3xl md:mx-5'>
        <div className='p-1 shadow-slate-200 border-2 border-slate-200 shadow-md rounded-sm'>
            <Price/>
        </div>
    </div>
  )
}

export default RightCarDescription
