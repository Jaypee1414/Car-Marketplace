import { useUser } from '@clerk/clerk-react';
import { App as SendbirdApp, SendBirdProvider } from '@sendbird/uikit-react';
import '@sendbird/uikit-react/dist/index.css';
import { useEffect, useState } from 'react';

function App() {
  const { user } = useUser();
  const [getUserID, setGetUserID] = useState()
  const [getUserProfile, setGetUserProfile] = useState()
  const [getUserNickname, setGetUserNickname] = useState()


  useEffect(()=>{
    if(user){
      const setUserId = user?.primaryEmailAddress?.emailAddress?.split('@')[0]
      setGetUserID(setUserId)
      setGetUserProfile(user?.imageUrl)
      setGetUserNickname(user?.fullName)
    }
  },[user])

  return (
 <div style={{ width:'90vw', height:'70vh' }}>
    <SendBirdProvider
      appId={import.meta.env.VITE_SENDBIRD_APPLICATION_ID}
      userId={getUserID}
      accessToken={import.meta.env.VITE_SENDBIRD_API_TOKENS}
      nickname={getUserNickname}
      profileUrl={getUserProfile}
    />
  </div> 
  )
}

export default App;