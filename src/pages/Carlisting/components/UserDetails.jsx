import { Button } from '@/components/ui/button'
import React, { useEffect } from 'react'
import { LuMessagesSquare } from "react-icons/lu";
import Service from '@/shared/Service';
import { useUser } from '@clerk/clerk-react';

function UserDetails({car}) {
  const { user } = useUser();
  console.log(car)

  async function sendMessageToOwner(){  
    try {
      const setUserId = user?.primaryEmailAddress?.emailAddress?.split('@')[0]
      const response = await Service.registerInSendbird(setUserId,user?.fullName,user?.imageUrl)
      console.log(response)
    } catch (error) {
      console.log("User Login Failed")
    }

    try {
      const setUserId = car?.createdBy?.split('@')[0]
      const response = await Service.registerInSendbird(setUserId,car?.userName,car?.userImageURL)
      console.log(response)
    } catch (error) {
      console.log("car Owner Details Login Failed")
    }


  }
  return (
    <div className='p-6'>
      <h2 className='text-lg md:text-xl  pb-4'>User details</h2>
      <div className=''>
        <div className='flex flex-row gap-3 items-center'>
          <img src={car?.userImageURL} alt="" className='rounded-full h-16 w-16 md:h-20 md:w-20'/>
          <div>
            <h2 className='font-bold text-2xl '>
              {car?.userName}
            </h2>
          </div>
        </div>
        <div>
          <p className='text-gray-600 pt-3'>
            {car?.createdBy}
          </p>
        </div>
        <div>
        <Button className="bg-[#4f46e4] w-full my-3 flex flex-row gap-3" onClick={sendMessageToOwner}><LuMessagesSquare /> Message Owner</Button>
        </div>
      </div>
    </div>
  )
}

export default UserDetails
