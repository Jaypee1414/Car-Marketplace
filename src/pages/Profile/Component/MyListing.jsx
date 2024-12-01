import {React, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { db } from '../../../../configs/index'
import { carImages, carListing } from '../../../../configs/schema'
import { desc, eq } from 'drizzle-orm'
import { useUser } from '@clerk/clerk-react'
import Service from '@/shared/Service'
import CarCard from '@/components/ui/CarCard'
import { MdDeleteForever } from "react-icons/md";
function MyListing() {

    const {user} = useUser()
    const [carInfo, setCarInfo] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        user && getCarListing()
    },[user])

    const getCarListing = async () =>{
        const result = await db.select()
        .from(carListing)
        .leftJoin(carImages,eq(carListing.id, carImages.carListingId))
        .where(eq(carListing.createdBy, user?.primaryEmailAddress?.emailAddress))
        const res = await Service.FormResult(result)
        setCarInfo(res)
    }

    const handleDeleteCar = async (car) => {
        const result = await db.delete()
        .from(carListing)
        .where(eq(carListing.id, car.id))

        
    }

  return (
    <div>
        <div className='flex justify-between items-center'>
            <h2 className="font-bold text-xl md:text-4xl py-4">My Listing</h2>
            <Link to={'/Car-Form'}>
                <Button>+ Add New</Button>
            </Link>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2'>
            
            {carInfo.map((car,index)=>(
                <div key={index}>
                    <CarCard Car={car}/>
                     <div className='flex flex-row justify-between'>
                        <Link to={'/Car-Form?mode=edit&id=' + car.id} className="w-full">
                        <Button variant="outline" className="w-full">Edit</Button>
                        </Link>
                        <Button className="bg-red-600" onClick={() => handleDeleteCar(car)}><MdDeleteForever className='text-lg'/></Button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MyListing



// <div key={index}>
// <CarCard Car={item}/>
// <div className='flex flex-row justify-between'>
//     <Link to={'/Car-Form?mode=edit&id=' + item.carList.id} className="w-full">
//         <Button variant="outline" className="w-full">Edit</Button>
//     </Link>
//     <Button className="bg-red-600"><MdDeleteForever className='text-lg'/></Button>
// </div>
// </div>