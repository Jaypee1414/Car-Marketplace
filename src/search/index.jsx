import Header from '@/components/Header'
import { db } from '../../configs/index'
import { carImages, carListing } from '../../configs/schema'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { eq } from 'drizzle-orm'
import Service from '@/shared/Service'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import CarCard from "@/components/ui/CarCard"

function SearchItem() {
    const [searchParams] = useSearchParams()
    const [carDetails, setCarDetails] = useState([])
    const cars = searchParams.get('cars')
    const model = searchParams.get('model')
    const pricing = searchParams.get('price')

    useEffect(()=>{
        getCarDetails()
    },[])

    const getCarDetails = async() =>{
        try {
            const result = await db.select()
            .from(carListing)
            .innerJoin(carImages,eq(carImages.carListingId, carListing.id))
            .where(cars != undefined && eq(carListing.condition , cars))
            .where(model != undefined && eq(carListing.make, model))

            const response = Service.FormResult(result)

            console.log(response)
            setCarDetails(response)

        } catch (error) {
            console.log("there's a error :" , error)
        }
    }
  return (
    <div>
      <Header />
      <div>
            <h2 className="md:text-4xl font-medium flex my-10 justify-center">
                Result of Car: {cars} Model: {model} Price: ${pricing}
            </h2>
          <ul className="mx-12 md:mx-28">
            <Carousel>
                <CarouselContent>
                    {carDetails.map((Car , index) => (
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

    </div>
  )
}

export default SearchItem
