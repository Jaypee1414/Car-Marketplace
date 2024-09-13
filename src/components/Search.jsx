import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Separator } from "@/components/ui/separator"
  import { CiSearch } from "react-icons/ci";

function Search() {
  return (
    <div className="p-7 bg-white rounded-md gap-10 items-center w-full px-5 flex flex-col md:mt-7 md:flex-row md:rounded-full md:w-max md:p-4">
        <Select>
        <SelectTrigger className="w-[180px] outline-none md:border-none shadow-none font-medium text-lg">
            <SelectValue placeholder="Color" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
        </SelectContent>
        </Select>
        <Separator orientation="vertical" className=" hidden md:block"/>
        <Select>
        <SelectTrigger className="w-[180px] outline-none md:border-none shadow-none font-medium text-lg">
            <SelectValue placeholder="Model" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
        </SelectContent>
        </Select>
        <Separator orientation="vertical"  className=" hidden md:block"/>
        <Select>
        <SelectTrigger className="w-[180px] outline-none md:border-none shadow-none font-medium text-lg">
            <SelectValue placeholder="Price" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
        </SelectContent>
        </Select>
        <CiSearch className="text-2xl cursor-pointer hidden md:block"/>
    </div>
  )
}

export default Search
