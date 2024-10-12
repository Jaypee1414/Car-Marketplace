import { Input } from "@/components/ui/input"
export default InputField
function InputField({item,handleInput,carInfo}) {
  
  return (
    <div>
        <Input type={item?.fieldType} 
        name={item?.name} 
        defaultValue={carInfo?.[item.name]}
        onChange={(e) => handleInput(item.name, e.target.value )}/>
    </div>
      
  )
}

