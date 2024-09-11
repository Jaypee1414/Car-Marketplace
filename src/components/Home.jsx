import { SignInButton } from "@clerk/clerk-react"

function Home() {
  return (
    <>
    <SignInButton mode="modal" forceRedirectUrl={"/"}>
       <button>Sign In</button>
    </SignInButton>   
    </>
  )
}

export default Home
