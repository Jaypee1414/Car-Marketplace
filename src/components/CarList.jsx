import { useState,useEffect } from "react"
import CarListFaker from "@/shared/CarListFaker"
import CarCard from "./ui/CarCard"
import { useUser } from '@clerk/clerk-react'
import { desc, eq } from 'drizzle-orm'
import { carImages, carListing } from '../../configs/schema'
import { db } from '../../configs/index'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

function CarList() {
  const {user} = useUser()
  const [userCarList, setUserCarList] = useState([]) 
  useEffect(()=>{
    getCarListing()
  },[user])
    const getCarListing = async () =>{
      const result = await db.select()
      .from(carListing)
      .leftJoin(carImages,eq(carListing.id, carImages.carListingId))
      .where(eq(carListing.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(carListing.id))
      setUserCarList(result)
      console.log(result)
  }
  return (
    <div>
      <h2 className="font-bold text-3xl text-center mt-10">Most Searched Car List</h2>
        <ul className="mx-12 md:mx-28">
        <Carousel>
             <CarouselContent>
                {userCarList.map((Car , index) => (
                <CarouselItem className="basis-1/2 md:basis-1/4" key={index}>
                  <CarCard Car={Car}/>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
        </ul>
    </div>
  )
}

export default CarList