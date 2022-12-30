import { AuthState } from "@enums";
import { app } from "@firebase";
import { Auth, getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

export const useUser = () => {
    const [auth, setAuth] = useState<Auth>();
    const [authState, setAuthState] = useState<AuthState>(AuthState.LOADING);
    useEffect(() => {
        setAuth(getAuth(app))
    }, [])

    useEffect(() => {
        if (auth) {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    console.log("signed in!")
                    setAuthState(AuthState.SIGNED_IN);
                } else {
                    console.log("not signed in!")
                    setAuthState(AuthState.SIGNED_OUT);
                }
            })
        }
    }, [auth])


    return {
        auth,
        authState
    }
}