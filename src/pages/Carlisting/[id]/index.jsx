import Header from '@/components/Header'
import { db } from '../../../../configs/index'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { carImages, carListing } from '../../../../configs/schema'
import { eq } from 'drizzle-orm'
import Service from '@/shared/Service'
import CarDetails from '..'

function CarDetailsList() {
    const [setCarDetails, getSetCarDetails] = useState([])
    const {id} = useParams()
    console.log(id)


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
      <div>
        <Header/>
        <CarDetails car={setCarDetails}/>
      </div>
    </div>
  )
}

export default CarDetailsList
