import ProtectedRoute from "@components/ProtectedRoute";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Register from "@pages/Register";
import {
    createBrowserRouter,
} from "react-router-dom"

const router = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedRoute page={<Home />} />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />
    }
]);


export default router;