import { UserButton, useUser } from '@clerk/clerk-react'
import { Button } from './ui/button'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
function Header() {
    const {isSignedIn } = useUser()
  return (
    <div className='flex justify-between items-center shadow-sm p-5'>
        <img src={logo} alt="" width={170} height={150} />
        <ul className='hidden md:flex gap-16'>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Home</li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>List</li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>About</li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Contact</li>
        </ul>
        {isSignedIn ? 
        <div className='flex justify-between px-6 gap-1 md:gap-5'>
            <UserButton/>
            <Link to={'/profile'}>
              <Button>Submit Listing</Button>
            </Link>
        </div> : <Link to={'/profile'}><Button>Submit Listing</Button></Link>
        }
    </div>
  )
}

export default Header
