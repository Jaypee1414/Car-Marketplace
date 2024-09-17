import Header from "@/components/Header"
import { Button } from "@/components/ui/button"

function Profile() {
  return (
    <div>
      <Header/>
      <div className="p-11 flex flex-row justify-between items-center">
        <h2 className="font-bold text-4xl">My Listing</h2>
        <Button>+ Add New</Button>
      </div>
    </div>
  )
}

export default Profile
