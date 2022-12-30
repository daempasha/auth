import { AuthState } from "@enums";
import { useUser } from "@hooks";
import Error from "@pages/Error";
import Loader from "@pages/Loader";
import { useNavigate } from "react-router-dom";
import { ProtectedRouteProps } from "./types";
const ProtectedRoute = ({ page }: ProtectedRouteProps) => {
    const navigate = useNavigate();
    const { authState } = useUser();

    if (authState === AuthState.SIGNED_IN) {
        return page;
    }

    if (authState === AuthState.SIGNED_OUT) {
        navigate("login")
        return null;
    }

    return <Loader />

}

export default ProtectedRoute;