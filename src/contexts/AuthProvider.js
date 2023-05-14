import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../components/firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    const googleLoing = ()=>{
        setLoading(true);
        return signInWithPopup(auth,provider)
    }
    const login = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log('user observer')
            setUser(currentUser)
            setLoading(false);
        });
        return ()=> unsubscribe();
    },[])

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    const authInfo = {
        googleLoing,
        createUser,
        login,
        logOut,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;