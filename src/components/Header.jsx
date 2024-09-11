import { UserButton, useUser } from '@clerk/clerk-react'
import logo from '../assets/logo.svg'
function Header() {
    const { isSignedIn } = useUser()
  return (
    <div className=' flex'>
        <img src={logo} alt="" width={170} height={150} />
        <ul>
            <li>Home</li>
            <li>New</li>
            <li>Preowned</li>
            <li>Contact</li>
        </ul>
        {isSignedIn ? 
        <div>
            <UserButton/>
            <button>Submit Listing...</button>
        </div> : <button>Submit Listing...</button>
        }
    </div>
  )
}

export default Header
