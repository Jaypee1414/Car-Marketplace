import CarListFaker from "@/shared/CarListFaker"
import CarCard from "./ui/CarCard"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import { TbManualGearboxFilled } from "react-icons/tb";
function CarList() {
  return (
    <div>
      <h2 className="font-bold text-3xl text-center mt-10">Most Searched Car List</h2>
        <ul className="mx-28">
        <Carousel>
             <CarouselContent>
                {CarListFaker.carList.map((Car , index) => (
                <CarouselItem className="basis-1/4"><CarCard key={index} Car={Car}/></CarouselItem>
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