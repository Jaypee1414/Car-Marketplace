import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import CarForm from "./pages/CarForm"
import SearchCategory from "./search/[category]"
import SearchItem from "./search"
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
    },
    {
      path:'/search',
      element: <SearchItem/>
    },
    {
      path:'/search/:category',
      element: <SearchCategory/>
    }
  ])
  return (
      <RouterProvider router={router}/>
  )
}

export default App
