import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import CarForm from "./pages/CarForm"
function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element:<Home/>
    },
    {
      path: '/profile',
      element: <Profile/>,
    },
    {
      path:'/Car-Form',
      element: <CarForm/>
    }
  ])
  return (
      <RouterProvider router={router}/>
  )
}

export default App
