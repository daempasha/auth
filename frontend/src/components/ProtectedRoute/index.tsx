import { useAuth } from "@hooks";
import { useNavigate } from "react-router-dom";
import { ProtectedRouteProps } from "./types";
const ProtectedRoute = ({ page }: ProtectedRouteProps) => {
    const navigate = useNavigate();
    const { auth } = useAuth();

    if (!auth?.currentUser) {
        navigate("login")
    }

    if (auth?.currentUser) {
        return page;
    }


}

export default ProtectedRoute;