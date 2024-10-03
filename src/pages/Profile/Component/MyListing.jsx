import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { db } from '../../../../configs/index'
import { carImages, carListing } from '../../../../configs/schema'
import { desc, eq } from 'drizzle-orm'
import { useUser } from '@clerk/clerk-react'

function MyListing() {

    const {user} = useUser()

    useEffect(()=>{
        const getCarListing = async () =>{
            const result = await db.select()
            .from(carListing)
            .leftJoin(carImages,eq(carListing.id, carImages.carListingId))
            .where(eq(carListing.createdBy, user?.primaryEmailAddress?.emailAddress))
            .orderBy(desc(carListing.id))
            console.log(result)
        }
        getCarListing()
    },[user])
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
