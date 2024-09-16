import CarListFaker from "@/shared/CarListFaker"
import CarCard from "./ui/CarCard"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
function CarList() {
  return (
    <div>
      <h2 className="font-bold text-3xl text-center mt-10">Most Searched Car List</h2>
        <ul className="mx-12 md:mx-28">
        <Carousel>
             <CarouselContent>
                {CarListFaker.carList.map((Car , index) => (
                <CarouselItem className="basis-1/2 md:basis-1/4" key={index}><CarCard Car={Car}/></CarouselItem>
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