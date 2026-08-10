import { AnimatePresence } from "framer-motion";

import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";

import IntroLoader from "./components/Loading/IntroLoader";
import WelcomeModal from "./components/Welcome/WelcomeModal";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

import { useState } from "react";

function AppContent() {
    const [page, setPage] =
        useState("home");

    return (
        <>
            <IntroLoader />

            {page === "home" && (
                <>
                    <Home
                        onLogin={() =>
                            setPage("login")
                        }
                    />

                    <WelcomeModal />
                </>
            )}

            <AnimatePresence mode="wait">
                {page === "login" && (
                    <Login
                        onBack={() =>
                            setPage("home")
                        }
                    />
                )}
            </AnimatePresence>
        </>
    );
}

function App() {
    return (
        <ThemeProvider>
            <UserProvider>
                <AppContent />
            </UserProvider>
        </ThemeProvider>
    );
}

export default App;
