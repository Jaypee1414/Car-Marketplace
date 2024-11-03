import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Separator } from "@/components/ui/separator"
import { useState } from "react";
  import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import CarMakes from '@/shared/CatagoryData.js'

function Search() {
    const [isCar, setIsCar] = useState()
    const [isModal, setIsModel] = useState()
    const [isPrice, setIsPrice] = useState()

   return (
    <div className="p-7 bg-white rounded-md gap-10 items-center w-full px-5 flex flex-col md:mt-7 md:flex-row md:rounded-full md:w-max md:p-4">
        <Select onValueChange={(value)=> setIsCar(value)}>
        <SelectTrigger className="w-[180px] outline-none md:border-none shadow-none font-medium text-lg">
            <SelectValue placeholder="Cars" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="New">New</SelectItem>
            <SelectItem value="Used">Use</SelectItem>
            <SelectItem value="Certified Pre-Owned">Certified Pre-owned</SelectItem>
        </SelectContent>
        </Select>

        <Separator orientation="vertical" className=" hidden md:block"/>

        <Select onValueChange={(value)=> setIsModel(value)}>
        <SelectTrigger className="w-[180px] outline-none md:border-none shadow-none font-medium text-lg">
            <SelectValue placeholder="Car Makes" />
        </SelectTrigger>
        <SelectContent>
            {CarMakes.CarMakes.map((CarMakes, index)=>{
                return(
                    <div key={index}>
                        <SelectItem value={CarMakes.name}>{CarMakes.name}</SelectItem>
                    </div>
                )
            })}            
        </SelectContent>
        </Select>

        <Separator orientation="vertical"  className=" hidden md:block"/>
        
        <Select onValueChange={(value)=> setIsPrice(value)}>
        <SelectTrigger className="w-[180px] outline-none md:border-none shadow-none font-medium text-lg">
            <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent>
            {CarMakes.Pricing.map((car, index)=>{
                return(
                    <div key={index}>
                        <SelectItem value={car.amount}>${car.amount}</SelectItem>
                    </div>
                )
            })} 
        </SelectContent>
        </Select>
        <Link to={`/search?cars=`+isCar+`&model=`+isModal+`&price=`+isPrice}>
            <CiSearch  className="text-2xl cursor-pointer hidden md:block"/>
        </Link>
    </div>
  )
}

export default Search
