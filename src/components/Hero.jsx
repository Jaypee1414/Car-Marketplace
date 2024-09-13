import Search from "./Search"
import icon from "../assets/icon.svg"
import Car from "../assets/carImage.png"

function Hero() {
  return (
    <div className="">
        <div className="flex flex-col h-[900px] items-center p-10 py-20 gap-3 md:h-[600px] w-full bg-emerald-100">
            <h2 className="text-xl">Find cars for sale and for rent near you</h2>
            <div className="flex flex-row">
            <img src={icon} width={80} height={80} className="hidden md:block"/>
            <h2 className="text-8xl font-bold">
                Find your dream car
            </h2>
            </div>
            <Search/>
            <img src={Car} alt="" srcset="" />
        </div>
    </div>
  )
}

export default Hero
