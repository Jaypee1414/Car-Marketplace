import CatagoryData from "@/shared/CatagoryData"
function Catergory() {
  return (
    <div className="mt-20 py-6">
        <h2 className="font-bold text-4xl text-center mb-6">Browse By Type</h2>
        <ul className="grid grid-cols-3 px-10 gap-6 sm:grid-cols-4 md:grid-cols-6 md:px-20 lg:grid-cols-9">
            {CatagoryData.Category.map((category)=>{
                return(
                    <li key={category.id} className="border flex flex-col items-center rounded-md p-3 hover:shadow-md cursor-pointer">
                        <img src={category.icon} width={30} height={30}/>
                        <h2 className="text-sm md:">{category.name}</h2>
                    </li>
                )})}
        </ul>
    </div>
  )
}

export default Catergory
