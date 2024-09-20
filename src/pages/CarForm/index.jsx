import Header from "@/components/Header"
import InputField from "./components/InputField"
import carDetails from "@/shared/carDetails"
import DropdownField from "./components/DropdownField"
import { Separator } from "@radix-ui/react-select"
import { Checkbox } from "@/components/ui/checkbox"
import features from "@/shared/features"
import { Button } from "@/components/ui/button"
import { useState } from "react"
function CarFrom() {

    const [formData, setFormData] = useState([])

    const handleInput = (name, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [name] : value
        })
        )
        console.log(name,":",value)
    }
    function onSubmit(e){
        e.preventDefault()
        console.log(formData)
    }
    
  return (
    <div>
        <Header/>
        <div className="px-10 md:px-20 my-10">
            <h2 className="font-bold text-3xl">Add New Listing</h2>
            <form className="p-10 border rounded-md mt-10" onSubmit={onSubmit}>
                <div>
                    <h2 className="font-medium text-lg mb-6">Car Details</h2>
                    <div className="grid grid-cols-2 gap-5">
                        {carDetails.carDetails.map((item,index)=>(
                            <div key={index}>
                                <label className="text-sm font-medium">{item.name}{item.required && <span className="text-rose-600 text-lg">*</span>}</label>
                                {item.fieldType === "text" || item.fieldType === "number" ? <InputField item={item} handleInput={handleInput}/> : item.fieldType === "dropdown"? <DropdownField item={item} handleInput={handleInput}/> : null}
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
                                <Checkbox  onCheckedChange={(value)=> handleInput(item.name,value)} />{item.name}
                            </div>
                        ))}
                    </div>
                </div>
                <Separator className='border mt-10 mb-10'/>
                <div>
                    <h2 className="font-medium text-lg mb-6">Car Image</h2>
                    <div className="mt10 flex justify-end">
                        <Button>Submit</Button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default CarFrom