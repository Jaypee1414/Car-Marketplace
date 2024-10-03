import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { db } from '../../../../configs/index'
import { carImages, carListing } from '../../../../configs/schema'
import { desc, eq } from 'drizzle-orm'

function MyListing() {

    useEffect(()=>{
        const getCarListing = async () =>{
            const result = await db.select()
            .from(carListing)
            .leftJoin(carImages,eq(carListing.id, carImages.carListingId))
            .orderBy(desc(carListing.id))
            console.log(result)
        }
        getCarListing()
    },[])
  return (
    <div>
        <h2 className="font-bold text-4xl">My Listing</h2>
        <Link to={'/Car-Form'}>
            <Button>+ Add New</Button>
        </Link>
    </div>
  )
}

export default MyListing
