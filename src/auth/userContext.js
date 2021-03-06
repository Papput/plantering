import React, {useState, useEffect} from 'react';
import {auth} from './firebase'

export const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        //update user state when users auth state changes on firebase
        const unsubscribe = auth.onAuthStateChanged(setUser)
        return () => {
            console.log('Unsubscribe');
            unsubscribe();
        }
    }, []);

    return (
        <AuthContext.Provider value={user}>
            {/* Render children components */}
            {children}
        </AuthContext.Provider>
    )
}