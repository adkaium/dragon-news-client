import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader,setLoader] = useState(true);
    console.log(user);
    const provider = new GoogleAuthProvider();

    const googleSignIn = () =>{
        setLoader(true)
        return signInWithPopup(auth,provider)
    }

    const creatNewUser = (email,password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }

    const updateUserProfile = (profile) =>{
        return updateUserProfile(auth.currentUser,profile)
    }

    const logIn = (email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser);
            setUser(currentUser)
            setLoader(false)
        });
        return()=>{
            unsubscribe()
        }
    },[])
    const authInfo = {
        user,
        loader, 
        googleSignIn, 
        creatNewUser,
        updateUserProfile,
        logIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;