import Header from '@/components/Header'
import { db } from '../../../../configs/index'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { carImages, carListing } from '../../../../configs/schema'
import { eq } from 'drizzle-orm'
import Service from '@/shared/Service'
import CarDetails from '../components'
import CarDescription from '../components/CarDescription'

function CarDetailsList() {
    const [setCarDetails, getSetCarDetails] = useState([])
    const {id} = useParams()


    useEffect(()=>{
        getCarDetails()
    },[id])

    const getCarDetails = async () =>{
        const result  = await db.select().from(carListing)
        .innerJoin(carImages,eq(carImages.carListingId, carListing.id))
        .where(eq(carListing.id,id))
        const res = Service.FormResult(result)
        getSetCarDetails(res[0])
    }
  return (
    <div>
       <Header/>
       <div className=''>
          <div>
            <CarDetails car={setCarDetails}/>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 w-full px-7 md:px-32 '>
            {/* left bar */}
            <div className='grid col-span-2'>
              <CarDescription car={setCarDetails}/>
            </div>

            {/* right bar */}
            <div className=''>right</div>
          </div>
       </div>
    </div>
  )
}

export default CarDetailsList
