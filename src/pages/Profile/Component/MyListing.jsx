import {React, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { db } from '../../../../configs/index'
import { carImages, carListing } from '../../../../configs/schema'
import { desc, eq } from 'drizzle-orm'
import { useUser } from '@clerk/clerk-react'
import Service from '@/shared/Service'
import CarCard from '@/components/ui/CarCard'
function MyListing() {

    const {user} = useUser()
    const [userCarList, setUserCarList] = useState([]) 

    useEffect(()=>{
        user && getCarListing()
    },[user])

    const getCarListing = async () =>{
            const result = await db.select()
            .from(carListing)
            .leftJoin(carImages,eq(carListing.id, carImages.carListingId))
            .where(eq(carListing.createdBy, user?.primaryEmailAddress?.emailAddress))
            .orderBy(desc(carListing.id))
            const res = Service.FormResult(result)
            setUserCarList(result)
            console.log(result)
    }
  return (
    <div>
        <div className='flex justify-between items-center'>
            <h2 className="font-bold text-4xl py-4">My Listing</h2>
            <Link to={'/Car-Form'}>
                <Button>+ Add New</Button>
            </Link>
        </div>
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2'>
            {
            userCarList.map((item,index) =>(
                <div key={index}>
                    <CarCard Car={item}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MyListing
