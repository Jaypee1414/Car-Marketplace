import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
function DropdownField({item}) {
  return (
    <div>
    <Select>
        <SelectTrigger className="w-full">
            <SelectValue placeholder={item.label} />
        </SelectTrigger>
        <SelectContent>  
            {item.options.map((item, index) => (
                <SelectItem value="dark" key={index}>{item}</SelectItem>
            ))}
            <SelectItem value="system">System</SelectItem>
        </SelectContent>
    </Select>
    </div>
  )
}

export default DropdownField
