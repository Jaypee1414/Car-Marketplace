import Header from "@/components/Header";
import Search from "@/components/Search";
import React, { useEffect, useState } from "react";
import icon from "../../assets/icon.svg";
import { useParams } from "react-router-dom";
import { db } from "../../../configs/index";
import { carImages, carListing } from "../../../configs/schema";
import { eq } from "drizzle-orm";
import Service from "@/shared/Service";


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
            {carDetails.map((car)=>{
                return(
                    <div>
                        {car.category}
                    </div>
                )
            })}
      </div>

    </div>
  );
}

export default SearchCategory;
