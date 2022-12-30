import { app } from "@firebase";
import { Auth, getAuth } from "firebase/auth";
import { useState, useEffect } from "react";

export const useAuth = () => {
    const [auth, setAuth] = useState<Auth>();

    useEffect(() => {
        setAuth(getAuth(app))
    }, [])


    return {
        auth
    }
}