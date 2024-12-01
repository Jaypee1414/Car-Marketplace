import Service from "@/shared/Service";
import { useUser } from "@clerk/clerk-react";
import { App as SendbirdApp, SendBirdProvider } from "@sendbird/uikit-react";
import { GroupChannelList } from "@sendbird/uikit-react/GroupChannelList";
import { GroupChannel } from '@sendbird/uikit-react/GroupChannel';
import "@sendbird/uikit-react/dist/index.css";
import { useEffect, useState } from "react";

function App() {
  const { user } = useUser();
  const [getUserID, setGetUserID] = useState();
  const [getUserProfile, setGetUserProfile] = useState();
  const [getUserNickname, setGetUserNickname] = useState();
  const [channelUrl, setChannelUrl] = useState()

  useEffect(() => {
    if (user) {
      try {
        const setUserId =
          user?.primaryEmailAddress?.emailAddress?.split("@")[0];
        setGetUserID(setUserId);
        setGetUserProfile(user?.imageUrl);
        setGetUserNickname(user?.fullName);
        // Service.registerInSendbird(setUserId, user?.fullName,user?.imageUrl)
      } catch (error) {
        console.log("No User Found");
      }
    }
  }, [user]);

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <SendBirdProvider
        appId={import.meta.env.VITE_SENDBIRD_APPLICATION_ID}
        userId={getUserID}
        accessToken={import.meta.env.VITE_SENDBIRD_API_TOKENS}
        nickname={getUserNickname}
        profileUrl={getUserProfile}
      >
        {/* Channel List */}
        <div className="grid grid-cols-1 md:grid-cols-3 h-full">
          <div>
            <GroupChannelList className="text-sm"
            channelListQueryParams = {
              {
                includeEmpty: true
              }
            }
            onChannelSelect={(channel) => {setChannelUrl(channel?.url)}}
            />
          </div>
          <div className="grid md:col-span-2">
            <GroupChannel channelUrl={channelUrl} />
          </div>
        </div>
      </SendBirdProvider>
    </div>
  );
}

export default App;
