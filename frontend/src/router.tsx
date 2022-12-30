import ProtectedRoute from "@components/ProtectedRoute";
import Register from "@pages/Register";
import {
    createBrowserRouter,
} from "react-router-dom"

const router = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedRoute page={<div>Hello world!</div>} />,
    },
    {
        path: "/login",
        element: <Register />,
    },
    {
        path: "/register",
        element: <Register />
    }
]);


export default router;