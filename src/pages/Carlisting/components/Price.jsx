import React from 'react'
import { Button } from '@/components/ui/button'
import { GoTag } from "react-icons/go";
function Price({sellingPrice}) {
  return (
    <div className='p-6'>
        <p className='text-base md:text-lg'>Our Price</p>
        <p className='text-xl font-semibold md:text-3xl md:font-bold'>${sellingPrice}</p>
        <div>
            <Button className="bg-[#4f46e4] w-full my-5 flex flex-row gap-3"><GoTag /> Make an Offer Price</Button>
        </div>
    </div>
  )
}

export default Price
    