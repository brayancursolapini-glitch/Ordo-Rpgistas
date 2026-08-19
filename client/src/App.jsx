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
    const [page, setPage] = useState("landing");

    return (
        <>
            <IntroLoader />

            <AnimatePresence mode="wait">

                {/* =========================
                    LANDING PAGE
                ========================= */}

                {page === "landing" && (
                    <motion.div
                        key="landing"
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.4,
                        }}
                    >
                        <Landing
                            onLogin={() => {
                                setPage("login");
                            }}
                            onRegister={() => {
                                setPage("cadastro");
                            }}
                        />

                        <WelcomeModal />
                    </motion.div>
                )}


                {/* =========================
                    LOGIN
                ========================= */}

                {page === "login" && (
                    <motion.div
                        key="login"
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: -20,
                        }}
                        transition={{
                            duration: 0.35,
                        }}
                    >
                        <Login
                            onBack={() => {
                                setPage("landing");
                            }}
                            onRegister={() => {
                                setPage("cadastro");
                            }}
                            onLoginSuccess={() => {
                                setPage("dashboard");
                            }}
                        />
                    </motion.div>
                )}


                {/* =========================
                    CADASTRO
                ========================= */}

                {page === "cadastro" && (
                    <motion.div
                        key="cadastro"
                        initial={{
                            opacity: 0,
                            x: 20,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        exit={{
                            opacity: 0,
                            x: -20,
                        }}
                        transition={{
                            duration: 0.35,
                        }}
                    >
                        <Cadastro
                            onBack={() => {
                                setPage("landing");
                            }}
                            onComplete={() => {
                                setPage("dashboard");
                            }}
                        />
                    </motion.div>
                )}


                {/* =========================
                    HOME PÓS-LOGIN
                ========================= */}

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
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
        >
            <div>

                <div
                    style={{
                        color: "#d7ae57",
                        fontSize: "12px",
                        letterSpacing: "0.4em",
                    }}
                >
                    ORDO RPGISTAS
                </div>

                <h1
                    style={{
                        marginTop: "15px",
                        fontSize: "35px",
                        fontWeight: 400,
                    }}
                >
                    Sua aventura começa agora.
                </h1>

                <p
                    style={{
                        marginTop: "12px",
                        opacity: 0.5,
                        fontFamily: "Inter, sans-serif",
                        fontSize: "12px",
                    }}
                >
                    A verdadeira Home será construída agora.
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
