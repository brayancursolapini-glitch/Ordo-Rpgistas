import { motion } from "framer-motion";
import {
    ChevronDown,
    LogIn,
    Sparkles,
} from "lucide-react";

import SideMenu from "../../components/Menu/SideMenu";
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher";
import MagicalButton from "../../components/Buttons/MagicalButton";

import { useTheme } from "../../context/ThemeContext";

import dndBackground from "../../assets/themes/dnd-background.jpg";
import ordemBackground from "../../assets/themes/ordem-background.jpg";

import "./Home.css";

export default function Home({
    onLogin,
    onRegister,
}) {
    const { theme, setTheme } = useTheme();

    const isDnd = theme === "dnd";

    return (
        <main className="home">

            {/* =====================================================
                FUNDOS DOS DOIS SISTEMAS
            ====================================================== */}

            <div className="home-background">

                {/* ================= D&D ================= */}

                <div
    className="world world-dnd"
    style={{
        backgroundImage: `url(${dndBackground})`,
    }}
>

                    <div className="world-overlay" />

                    <div className="world-content">

                        <span className="world-label">
                            UM MUNDO DE AVENTURAS
                        </span>

                        <h2>
                            DUNGEONS
                            <br />
                            & DRAGONS
                        </h2>

                        <p>
                            Reinos, aventuras,
                            heróis e histórias
                            que só você pode criar.
                        </p>

                        <button
                            className="world-enter"
                            onClick={() => setTheme("dnd")}
                        >
                            Entrar neste mundo
                        </button>

                    </div>

                </div>


                {/* ================= ORDEM ================= */}

               <div
    className="world world-ordem"
    style={{
        backgroundImage: `url(${ordemBackground})`,
    }}
>

                    <div className="world-overlay" />

                    <div className="world-content">

                        <span className="world-label">
                            A REALIDADE NÃO É O QUE PARECE
                        </span>

                        <h2>
                            ORDEM
                            <br />
                            PARANORMAL
                        </h2>

                        <p>
                            Mistérios, entidades,
                            investigação e aquilo
                            que deveria permanecer
                            oculto.
                        </p>

                        <button
                            className="world-enter"
                            onClick={() => setTheme("ordem")}
                        >
                            Entrar neste mundo
                        </button>

                    </div>

                </div>

            </div>


            {/* =====================================================
                PARTÍCULAS
            ====================================================== */}

            <div className="particles">

                {Array.from({ length: 25 }).map(
                    (_, index) => (
                        <span
                            key={index}
                            className="particle"
                            style={{
                                "--delay": `${Math.random() * 8}s`,
                                "--left": `${Math.random() * 100}%`,
                                "--duration": `${5 + Math.random() * 8}s`,
                            }}
                        />
                    )
                )}

            </div>


            {/* =====================================================
                MENU
            ====================================================== */}

            <SideMenu />


            {/* =====================================================
                BOTÕES SUPERIORES
            ====================================================== */}

            <div className="top-actions">

                <ThemeSwitcher />

                <motion.button
                    className="login-button"
                    onClick={onLogin}

                    whileHover={{
                        scale: 1.05,
                    }}

                    whileTap={{
                        scale: 0.95,
                    }}
                >

                    <LogIn size={18} />

                    Entrar

                </motion.button>

            </div>


            {/* =====================================================
                PAINEL CENTRAL
            ====================================================== */}

            <motion.section
                className="hero"

              initial={{
     opacity: 0,
    y: 30,
}}
animate={{
    opacity: 1,
    y: 0,
}}

                transition={{
                    delay: 1.8,
                    duration: 1,
                }}
            >

                {/* ESTRELA */}

                <div className="hero-symbol">
                    <Sparkles />
                </div>


                {/* BEM-VINDO */}

                <span className="hero-welcome">
                    BEM-VINDO À
                </span>


                {/* TÍTULO */}

                <h1 className="hero-title">

                    ORDO

                    <span className="hero-subtitle">
                        RPGISTAS
                    </span>

                </h1>


                {/* FRASE */}

                <p className="hero-tagline">
                    Onde histórias ganham vida.
                </p>


                {/* DIVISOR */}

                <div className="hero-divider">
                    <span />
                    ✦
                    <span />
                </div>


                {/* DESCRIÇÃO */}

                <p className="hero-description">

                    Um lugar onde você e seus amigos
                    podem criar mundos, viver aventuras
                    e escrever histórias que nunca
                    acontecerão duas vezes da mesma forma.

                </p>


                {/* BOTÕES */}

                <div className="hero-actions">

                    <MagicalButton
                        onClick={onRegister}
                    >
                        Criar minha conta
                    </MagicalButton>


                    <MagicalButton
                        variant="secondary"
                        onClick={onRegister}
                    >
                        Conheça o RPG
                    </MagicalButton>

                </div>

            </motion.section>


            {/* =====================================================
                INDICADOR EXPLORE
            ====================================================== */}

            <motion.div
                className="scroll-indicator"

                initial={{
                    opacity: 0,
                }}

                animate={{
                    opacity: 1,
                }}

                transition={{
                    delay: 3,
                }}
            >

                <span>
                    Explore
                </span>

                <ChevronDown />

            </motion.div>


            {/* =====================================================
                SISTEMA ATUAL
            ====================================================== */}

            <div className="theme-indicator">

                <span>
                    SISTEMA ATUAL
                </span>

                <strong>

                    {isDnd
                        ? "DUNGEONS & DRAGONS"
                        : "ORDEM PARANORMAL"}

                </strong>

            </div>

        </main>
    );
}
