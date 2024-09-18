import { Input } from "@/components/ui/input"
export default InputField
function InputField({item,handleInput}) {
  return (
    <div>
        <Input type={item?.fieldType} name={item?.name} onChange={(e) => handleInput(item.name, e.target.value )}/>
    </div>
      
  )
}

