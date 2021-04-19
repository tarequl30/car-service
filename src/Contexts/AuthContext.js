import React, { useContext, useEffect, useState } from 'react';
import { auth, GoogleAuthProvider } from '../components/Login/firebase.config';

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
    })
    const signInWithGoogle = () => {
        return auth.signInWithPopup(GoogleAuthProvider)
    }
    const value = {
        currentUser,
        signInWithGoogle
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};