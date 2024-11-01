import Header from "@/components/Header";
import Search from "@/components/Search";
import React, { useEffect, useState } from "react";
import icon from "../../assets/icon.svg";
import { useParams } from "react-router-dom";
import { db } from "../../../configs/index";
import { carImages, carListing } from "../../../configs/schema";
import { eq } from "drizzle-orm";
import Service from "@/shared/Service";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CarCard from "@/components/ui/CarCard"


function SearchCategory() {
  const { category } = useParams();
  const [carDetails, setCarDetails] = useState([])

  useEffect(()=>{
    fetchDetails()
  },[])

  const fetchDetails = async () => {
    const fetchCarDetails =await db.select()
    .from(carListing)
    .innerJoin(carImages,eq(carImages.carListingId,carListing.id))
    .where(eq(category,carListing.category))
    const resp = await Service.FormResult(fetchCarDetails)
    setCarDetails(resp)
  }



  return (
    <div>
      <Header />
      <div className="flex flex-col p-20 bg-gray-100 justify-center items-center ">
            <div className="flex flex-row justify-center items-center gap-2">
                <img src={icon} width={80} height={80} className="hidden md:block" />
                <h2 className="md:text-4xl font-semibold uppercase">45° {category}</h2>
            </div>
            <Search />
      </div>
      <div>
            <h2 className="md:text-3xl font-semibold flex justify-center">
                List of {category}
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
  );
}

export default SearchCategory;
