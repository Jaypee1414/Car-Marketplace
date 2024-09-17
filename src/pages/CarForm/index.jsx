import Header from "@/components/Header"
import InputField from "./components/InputField"
import carDetails from "@/shared/carDetails"
import DropdownField from "./components/DropdownField"
import { Separator } from "@radix-ui/react-select"
import { Checkbox } from "@/components/ui/checkbox"
import features from "@/shared/features"
function CarFrom() {
    
  return (
    <div>
        <Header/>
        <div className="px-10 md:px-20 my-10">
            <h2 className="font-bold text-3xl">Add New Listing</h2>
            <form className="p-10 border rounded-md mt-10">
                <div>
                    <h2 className="font-medium text-lg mb-6">Car Details</h2>
                    <div className="grid grid-cols-2 gap-5">
                        {carDetails.carDetails.map((item,index)=>(
                            <div key={index}>
                                <label className="text-sm font-medium">{item.name}{item.required && <span className="text-rose-600 text-lg">*</span>}</label>
                                {item.fieldType === "text" || item.fieldType === "number" ? <InputField item={item}/> : item.fieldType === "dropdown"? <DropdownField item={item}/> : null}
                            </div>
                        ))}
                    </div>
                </div>
                <Separator className='border mt-10 mb-10'/>
                <div>
                    <h2 className="font-medium text-lg mb-6">Features</h2>
                    <div className="grid grid-cols-4 gap-5">
                        {features.features.map((item,index)=>(
                            <div key={index}>
                                <Checkbox /> {item.name}
                            </div>
                        ))}
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default CarFrom
