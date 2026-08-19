import {
    createContext,
    useContext,
    useState,
} from "react";

const UserContext =
    createContext();

export function UserProvider({
    children,
}) {
    const [user, setUser] =
        useState(null);

    function login(userData) {
        setUser(userData);
    }

    function logout() {
        setUser(null);
    }

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                login,
                logout,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context =
        useContext(UserContext);

    if (!context) {
        throw new Error(
            "useUser deve estar dentro de UserProvider."
        );
    }

    return context;
}
