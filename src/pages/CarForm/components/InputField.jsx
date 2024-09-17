import { Input } from "@/components/ui/input"
export default InputField
function InputField({item}) {
  return (
    <div>
        <Input type={item?.fieldType} name={item?.name}/>
    </div>
      
  )
}

