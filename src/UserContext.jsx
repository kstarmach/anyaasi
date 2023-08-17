// UserContext.js
import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export function useUserContext() {
    return useContext(UserContext);
}

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (user === null) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }
    }, [user])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}