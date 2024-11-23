import Header from "@/components/Header"
import MyListing from "./Component/MyListing"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Link } from "react-router-dom"
import Inbox from "../Inbox"

function Profile() {
  return (
    <div>
      <Header/>
      <div className="p-11 flex flex-row justify-start items-center full">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="flex space-x-3 w-full justify-start">
            <TabsTrigger value="account" className="p-3">My Listing</TabsTrigger>
            <TabsTrigger value="inbox" className="p-3">Inbox</TabsTrigger>
            <TabsTrigger value="profile" className="p-3">Profile </TabsTrigger>
          </TabsList>
          <TabsContent value="account"><MyListing/></TabsContent>
          <TabsContent value="inbox"><Inbox/></TabsContent>
          <TabsContent value="profile">This is your profile</TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Profile
