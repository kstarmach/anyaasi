// UserContext.js
import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export function useUserContext() {
    return useContext(UserContext);
}

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Unconditionally set the user from localStorage
        setUser(JSON.parse(localStorage.getItem('user')));
    }, []); // Empty dependency array, so it runs once when the component mounts

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}
