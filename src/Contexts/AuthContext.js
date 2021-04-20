import React, { useContext, useEffect, useState } from 'react';
import { auth, GoogleAuthProvider, provider } from '../components/Login/firebase.config';

const AuthContext = React.createContext()
export function useAuth() {
    return useContext(AuthContext)
}
export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    })
    const signInWithGoogle = () => {
        
        return auth.signInWithPopup(provider)
    }
    const signOut = () => {
        return auth.signOut()
    }
    const value = {
        currentUser,
        signInWithGoogle,
        signOut
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};