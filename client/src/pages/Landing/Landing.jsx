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

import "./Landing.css";

export default function Landing({
    onLogin,
    onRegister,
}) {
    const { theme, setTheme } = useTheme();

    const isDnd = theme === "dnd";

    return (
        <main className="landing">

            {/* ==============================
                FUNDOS
            ============================== */}

            <div className="landing-background">

                {/* D&D */}

                <section
                    className="landing-world landing-dnd"
                    style={{
                        backgroundImage: `url(${dndBackground})`,
                    }}
                >
                    <div className="landing-overlay" />

                    <div className="landing-world-content">

                        <span className="landing-world-label">
                            UM MUNDO DE AVENTURAS
                        </span>

                        <h2>
                            DUNGEONS
                            <br />
                            & DRAGONS
                        </h2>

                        <p>
                            Reinos, aventuras, heróis e histórias
                            que só você pode criar.
                        </p>

                        <button
                            className="landing-world-button"
                            onClick={() => setTheme("dnd")}
                        >
                            Entrar neste mundo
                        </button>

                    </div>
                </section>


                {/* ORDEM PARANORMAL */}

                <section
                    className="landing-world landing-ordem"
                    style={{
                        backgroundImage: `url(${ordemBackground})`,
                    }}
                >
                    <div className="landing-overlay" />

                    <div className="landing-world-content">

                        <span className="landing-world-label">
                            A REALIDADE NÃO É O QUE PARECE
                        </span>

                        <h2>
                            ORDEM
                            <br />
                            PARANORMAL
                        </h2>

                        <p>
                            Mistérios, entidades, investigação
                            e aquilo que deveria permanecer oculto.
                        </p>

                        <button
                            className="landing-world-button"
                            onClick={() => setTheme("ordem")}
                        >
                            Entrar neste mundo
                        </button>

                    </div>
                </section>

            </div>


            {/* ==============================
                PARTÍCULAS
            ============================== */}

            <div className="landing-particles">

                {Array.from({ length: 25 }).map((_, index) => (

                    <span
                        key={index}
                        className="landing-particle"
                        style={{
                            "--delay": `${Math.random() * 8}s`,
                            "--left": `${Math.random() * 100}%`,
                            "--duration": `${5 + Math.random() * 8}s`,
                        }}
                    />

                ))}

            </div>


            {/* ==============================
                MENU
            ============================== */}

            <SideMenu />


            {/* ==============================
                AÇÕES SUPERIORES
            ============================== */}

            <div className="landing-top-actions">

                <ThemeSwitcher />

                <motion.button
                    className="landing-login-button"
                    onClick={onLogin}
                    whileHover={{
                        scale: 1.05,
                    }}
                    whileTap={{
                        scale: 0.95,
                    }}
                >
                    <LogIn size={18} />

                    <span>
                        Entrar
                    </span>

                </motion.button>

            </div>


            {/* ==============================
                PAINEL CENTRAL
            ============================== */}

            <motion.section
                className="landing-hero"

                initial={{
                    opacity: 0,
                    y: 30,
                }}

                animate={{
                    opacity: 1,
                    y: 0,
                }}

                transition={{
                    delay: 1.2,
                    duration: 1,
                }}
            >

                <div className="landing-hero-symbol">
                    <Sparkles size={32} />
                </div>


                <span className="landing-hero-welcome">
                    BEM-VINDO À
                </span>


                <h1 className="landing-hero-title">

                    ORDO

                    <span>
                        RPGISTAS
                    </span>

                </h1>


                <p className="landing-hero-tagline">
                    Onde histórias ganham vida.
                </p>


                <div className="landing-hero-divider">

                    <span />

                    <b>
                        ✦
                    </b>

                    <span />

                </div>


                <p className="landing-hero-description">

                    Um lugar onde você e seus amigos podem criar
                    mundos, viver aventuras e escrever histórias
                    que nunca acontecerão duas vezes da mesma forma.

                </p>


                <div className="landing-hero-actions">

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


            {/* ==============================
                EXPLORE
            ============================== */}

            <motion.div
                className="landing-scroll"

                initial={{
                    opacity: 0,
                }}

                animate={{
                    opacity: 1,
                }}

                transition={{
                    delay: 2.5,
                }}
            >

                <span>
                    EXPLORE
                </span>

                <ChevronDown size={22} />

            </motion.div>


            {/* ==============================
                SISTEMA ATUAL
            ============================== */}

            <div className="landing-theme-indicator">

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
