import Header from "@/components/Header"
import MyListing from "./Component/MyListing"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function Profile() {
  return (
    <div>
      <Header/>
      <div className="p-11 flex flex-row justify-between items-center">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">My Listing</TabsTrigger>
            <TabsTrigger value="inbox">Inbox</TabsTrigger>
            <TabsTrigger value="profile">Profile </TabsTrigger>
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
