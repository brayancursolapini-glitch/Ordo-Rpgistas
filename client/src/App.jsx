import {
    AnimatePresence,
    motion,
} from "framer-motion";

import {
    useState,
} from "react";

import {
    ThemeProvider,
} from "./context/ThemeContext";

import {
    UserProvider,
} from "./context/UserContext";

import IntroLoader
    from "./components/Loading/IntroLoader";

import WelcomeModal
    from "./components/Welcome/WelcomeModal";

import Landing
    from "./pages/Landing/Landing";

import Login
    from "./pages/Login/Login";

import Cadastro
    from "./pages/Cadastro/Cadastro";


function AppContent() {

    const [page, setPage] =
        useState("landing");

    const [showWelcome, setShowWelcome] =
        useState(false);


    return (
        <>
            <IntroLoader />

            <AnimatePresence
                mode="wait"
            >

                {/* =====================================
                    LANDING PAGE
                    PRIMEIRA TELA DO SITE
                ===================================== */}

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
                    >

                        <Landing

                            onLogin={() =>
                                setPage("login")
                            }

                            onRegister={() =>
                                setPage("cadastro")
                            }

                            onLearnMore={() =>
                                setShowWelcome(true)
                            }

                        />

                    </motion.div>

                )}


                {/* =====================================
                    LOGIN
                ===================================== */}

                {page === "login" && (

                    <motion.div
                        key="login"

                        initial={{
                            opacity: 0,
                            y: 15,
                        }}

                        animate={{
                            opacity: 1,
                            y: 0,
                        }}

                        exit={{
                            opacity: 0,
                            y: -15,
                        }}
                    >

                        <Login

                            onBack={() =>
                                setPage("landing")
                            }

                            onRegister={() =>
                                setPage("cadastro")
                            }

                            onSuccess={() =>
                                setPage("dashboard")
                            }

                        />

                    </motion.div>

                )}


                {/* =====================================
                    CADASTRO
                ===================================== */}

                {page === "cadastro" && (

                    <motion.div
                        key="cadastro"

                        initial={{
                            opacity: 0,
                            y: 15,
                        }}

                        animate={{
                            opacity: 1,
                            y: 0,
                        }}

                        exit={{
                            opacity: 0,
                            y: -15,
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


                {/* =====================================
                    DASHBOARD
                    HOME REAL DO USUÁRIO
                ===================================== */}

                {page === "dashboard" && (

                    <DashboardPlaceholder />

                )}

            </AnimatePresence>


            <WelcomeModal

                isOpen={showWelcome}

                onClose={() =>
                    setShowWelcome(false)
                }

            />

        </>
    );
}


function DashboardPlaceholder() {

    return (

        <motion.main

            className="dashboard-placeholder"

            initial={{
                opacity: 0,
            }}

            animate={{
                opacity: 1,
            }}

            transition={{
                duration: 0.5,
            }}

            style={{

                minHeight: "100vh",

                display: "grid",

                placeItems: "center",

                background:
                    "radial-gradient(circle at top, #17130e, #050505 60%)",

                color: "white",

                fontFamily:
                    "Cinzel, Georgia, serif",

                textAlign:
                    "center",

                padding:
                    "30px",

            }}

        >

            <div>

                <span

                    style={{

                        color:
                            "#d7ae57",

                        fontSize:
                            "11px",

                        fontWeight:
                            700,

                        letterSpacing:
                            "0.45em",

                    }}

                >

                    ORDO RPGISTAS

                </span>


                <h1

                    style={{

                        margin:
                            "20px 0 15px",

                        fontSize:
                            "clamp(30px, 5vw, 55px)",

                        fontWeight:
                            500,

                    }}

                >

                    Sua aventura começa agora.

                </h1>


                <p

                    style={{

                        margin:
                            0,

                        maxWidth:
                            "550px",

                        color:
                            "rgba(255,255,255,0.55)",

                        fontFamily:
                            "Arial, sans-serif",

                        lineHeight:
                            1.7,

                    }}

                >

                    A verdadeira Home do Ordo RPGistas será construída
                    aqui. É nela que o jogador poderá acessar campanhas,
                    personagens, mapas, mesas e todas as ferramentas.

                </p>

            </div>

        </motion.main>

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
