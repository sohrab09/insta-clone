import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth"

import { auth } from "../firebase";


const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({});

    // Create User
    const userSignup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // Login User
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };

    // Check User, if user is logged in, return true, else return false
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("user ------->>>>> ", user)
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [user]);

    return (
        <UserContext.Provider value={{ userSignup, userLogin, user }}>
            {children}
        </UserContext.Provider>
    )
};

export const UserAuth = () => {
    return useContext(UserContext);
}