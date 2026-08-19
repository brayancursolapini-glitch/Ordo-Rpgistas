import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";

import IntroLoader from "./components/Loading/IntroLoader";
import WelcomeModal from "./components/Welcome/WelcomeModal";

import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";

function AppContent() {
    const [page, setPage] =
        useState("home");

    return (
        <>
            <IntroLoader />

            <AnimatePresence mode="wait">
                {page === "home" && (
                    <motion.div
                        key="home"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <Home
                            onLogin={() =>
                                setPage("login")
                            }
                            onRegister={() =>
                                setPage("cadastro")
                            }
                        />

                        <WelcomeModal />
                    </motion.div>
                )}

                {page === "login" && (
                    <Login
                        onBack={() =>
                            setPage("home")
                        }
                    />
                )}

                {page === "cadastro" && (
                    <Cadastro
                        onBack={() =>
                            setPage("home")
                        }
                        onComplete={() =>
                            setPage("dashboard")
                        }
                    />
                )}

                {page === "dashboard" && (
                    <DashboardPlaceholder />
                )}
            </AnimatePresence>
        </>
    );
}

function DashboardPlaceholder() {
    return (
        <motion.div
            style={{
                minHeight: "100vh",
                display: "grid",
                placeItems: "center",
                background: "#050505",
                color: "white",
                fontFamily: "Cinzel, serif",
                textAlign: "center",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div>
                <div
                    style={{
                        color: "#d7ae57",
                        fontSize: 12,
                        letterSpacing: "0.4em",
                    }}
                >
                    ORDO RPGISTAS
                </div>

                <h1
                    style={{
                        marginTop: 15,
                        fontSize: 35,
                        fontWeight: 400,
                    }}
                >
                    Sua aventura começa agora.
                </h1>

                <p
                    style={{
                        marginTop: 12,
                        opacity: 0.5,
                        fontFamily: "Inter, sans-serif",
                        fontSize: 12,
                    }}
                >
                    Dashboard será construído
                    no próximo módulo.
                </p>
            </div>
        </motion.div>
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
