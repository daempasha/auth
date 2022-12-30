import "@firebase"
import Login from "@pages/Register"
import router from "@router"
import { Toaster } from "react-hot-toast"
import {
  RouterProvider
} from "react-router-dom"

function App() {

  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  )
}

export default App
