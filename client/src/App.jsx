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

                {/* =========================================
                    LANDING PAGE
                    Primeira tela antes do login
                ========================================= */}

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
                            duration: 0.5,
                        }}
                    >
                        <Landing
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


                {/* =========================================
                    LOGIN
                ========================================= */}

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
                            duration: 0.4,
                        }}
                    >
                        <Login
                            onBack={() =>
                                setPage("landing")
                            }
                            onLoginSuccess={() =>
                                setPage("dashboard")
                            }
                        />
                    </motion.div>
                )}


                {/* =========================================
                    CADASTRO
                ========================================= */}

                {page === "cadastro" && (
                    <motion.div
                        key="cadastro"
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
                            duration: 0.4,
                        }}
                    >
                        <Cadastro
                            onBack={() =>
                                setPage("landing")
                            }
                            onComplete={() =>
                                setPage("dashboard")
                            }
                        />
                    </motion.div>
                )}


                {/* =========================================
                    DASHBOARD
                    Por enquanto é apenas temporário
                ========================================= */}

                {page === "dashboard" && (
                    <DashboardPlaceholder />
                )}

            </AnimatePresence>
        </>
    );
}


/* =========================================
    DASHBOARD TEMPORÁRIO

    Depois vamos substituir isso pela
    verdadeira Home do usuário.
========================================= */

function DashboardPlaceholder() {
    return (
        <motion.main
            style={{
                minHeight: "100vh",
                display: "grid",
                placeItems: "center",
                background:
                    "radial-gradient(circle at top, #1a140d 0%, #080808 55%, #030303 100%)",
                color: "white",
                fontFamily: "Cinzel, serif",
                textAlign: "center",
                padding: "30px",
            }}
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 0.7,
            }}
        >
            <div>

                <div
                    style={{
                        color: "#d7ae57",
                        fontSize: "12px",
                        letterSpacing: "0.4em",
                        marginBottom: "20px",
                    }}
                >
                    ORDO RPGISTAS
                </div>


                <h1
                    style={{
                        fontSize: "clamp(32px, 5vw, 60px)",
                        fontWeight: 400,
                        margin: 0,
                    }}
                >
                    Sua aventura começa agora.
                </h1>


                <p
                    style={{
                        marginTop: "20px",
                        opacity: 0.65,
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        lineHeight: 1.7,
                    }}
                >
                    Em breve você poderá criar campanhas,
                    <br />
                    montar personagens e explorar mundos.
                </p>


                <motion.button
                    onClick={() =>
                        setPage?.("landing")
                    }
                    style={{
                        marginTop: "30px",
                        padding: "14px 28px",
                        background: "transparent",
                        border:
                            "1px solid rgba(215, 174, 87, 0.6)",
                        color: "#d7ae57",
                        cursor: "pointer",
                        fontFamily: "Cinzel, serif",
                        letterSpacing: "0.08em",
                    }}
                    whileHover={{
                        scale: 1.05,
                    }}
                    whileTap={{
                        scale: 0.97,
                    }}
                >
                    ORDO RPGISTAS
                </motion.button>

            </div>
        </motion.main>
    );
}


/* =========================================
    APP PRINCIPAL
========================================= */

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
