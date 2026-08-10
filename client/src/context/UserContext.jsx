import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

const UserContext = createContext(null);

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    const [firstVisit, setFirstVisit] = useState(() => {
        return !localStorage.getItem(
            "ordo-has-visited"
        );
    });

    useEffect(() => {
        const savedUser =
            localStorage.getItem("ordo-user");

        if (savedUser) {
            try {
                setUser(JSON.parse(savedUser));
            } catch {
                localStorage.removeItem("ordo-user");
            }
        }
    }, []);

    const completeFirstVisit = () => {
        localStorage.setItem(
            "ordo-has-visited",
            "true"
        );

        setFirstVisit(false);
    };

    const login = (userData) => {
        localStorage.setItem(
            "ordo-user",
            JSON.stringify(userData)
        );

        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem("ordo-user");
        setUser(null);
    };

    return (
        <UserContext.Provider
            value={{
                user,
                firstVisit,
                login,
                logout,
                completeFirstVisit,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}
