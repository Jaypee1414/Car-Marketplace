import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

function Profile() {
  return (
    <div>
      <Header/>
      <div className="p-11 flex flex-row justify-between items-center">
        <h2 className="font-bold text-4xl">My Listing</h2>
        <Link to={'/Car-Form'}>
          <Button>+ Add New</Button>
        </Link>
      </div>
    </div>
  )
}

export default Profile
