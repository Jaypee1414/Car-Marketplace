import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
function DropdownField({item, handleInput}) {
  return (
    <div>
    <Select onValueChange={(value) => handleInput(item.name, value)}>
        <SelectTrigger className="w-full">
            <SelectValue placeholder={item.label} />
        </SelectTrigger>
        <SelectContent>  
            {item.options.map((item, index) => (
                <SelectItem value={item} key={index}>{item}</SelectItem>
            ))}
            <SelectItem value="system">System</SelectItem>
        </SelectContent>
    </Select>
    </div>
  )
}

export default DropdownField
