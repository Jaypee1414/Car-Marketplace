import { SignInButton, UserButton, useUser } from '@clerk/clerk-react'
import { Button } from './ui/button'
import logo from '../assets/logo.svg'
function Header() {
    const { user,isSignedIn } = useUser()
  return (
    <div className='flex justify-between items-center shadow-sm p-5'>
        <img src={logo} alt="" width={170} height={150} />
        <ul className='hidden md:flex gap-16'>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Home</li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>New</li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Preowned</li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Contact</li>
        </ul>
        {isSignedIn ? 
        <div className='flex justify-between gap-5'>
            <UserButton/>
            <Button>Submit Listing</Button>
        </div> : <Button>Sign in</Button>
        }
    </div>
  )
}

export default Header
