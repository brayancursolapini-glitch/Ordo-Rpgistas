import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("ordo-theme") || "dnd";
    });

    useEffect(() => {
        localStorage.setItem("ordo-theme", theme);

        document.documentElement.setAttribute(
            "data-theme",
            theme
        );
    }, [theme]);

    const toggleTheme = () => {
        setTheme((current) =>
            current === "dnd" ? "ordem" : "dnd"
        );
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
