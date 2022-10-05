import { createContext, useState, useEffect } from 'react';

import { onAuthStateChangedListener } from '../utils/firebase.utils';
import { createUserDocumentFromAuth } from '../utils/firebase.utils';

export const userContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user);
        })
        return unsubscribe;
    }, [])

    return <userContext.Provider value={value}>{children}</userContext.Provider>
}