import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const storedUser = localStorage.getItem("user");

    const [user, setUser] = useState(
    storedUser ? JSON.parse(storedUser) : null
    );

    const login = (email) => {

    const user = {
        email: email
    };

    localStorage.setItem("user", JSON.stringify(user));

    setUser(user);
    };

    const logout = () => {

        localStorage.removeItem("user");

        setUser(null);
    };

    return (

        <AuthContext.Provider
            value={{
                user,
                login,
                logout
            }}
        >

            {children}

        </AuthContext.Provider>

    );
}

export const useAuth = () => useContext(AuthContext);