import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user);
    const provider = new GoogleAuthProvider();

    const googleSignIn = () =>{
        return signInWithPopup(auth,provider)
    }

    const creatNewUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email,password)
    }

    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser);
            setUser(currentUser)
        });
        return()=>{
            unsubscribe()
        }
    },[])
    const authInfo = {user, googleSignIn, creatNewUser,logIn,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;