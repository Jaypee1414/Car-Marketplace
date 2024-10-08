import Header from "@/components/Header"
import MyListing from "./Component/MyListing"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function Profile() {
  return (
    <div>
      <Header/>
      <div className="p-11 flex flex-row justify-between items-center w-[100%]">
        <Tabs defaultValue="account" className="w-[100%]">
          <TabsList className="flex space-x-3 w-60">
            <TabsTrigger value="account" className="p-3">My Listing</TabsTrigger>
            <TabsTrigger value="inbox" className="p-3">Inbox</TabsTrigger>
            <TabsTrigger value="profile" className="p-3">Profile </TabsTrigger>
          </TabsList>
          <TabsContent value="account"><MyListing/></TabsContent>
          <TabsContent value="inbox">This is a Inbox Content</TabsContent>
          <TabsContent value="profile">This is your profile</TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Profile
