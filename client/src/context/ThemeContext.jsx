import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("dnd");

    const toggleTheme = () => {
        setTheme((currentTheme) =>
            currentTheme === "dnd"
                ? "ordem"
                : "dnd"
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
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(
            "useTheme deve ser usado dentro de ThemeProvider"
        );
    }

    return context;
}
