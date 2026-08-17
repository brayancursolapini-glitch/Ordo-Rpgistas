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

import "./Home.css";

export default function Home({
    onLogin,
    onRegister,
}) {
    const { theme, setTheme } = useTheme();

    const isDnd = theme === "dnd";

    return (
        <main className="home">

            <div className="home-background">

                <div className="world world-dnd">
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
                            onClick={() =>
                                setTheme("dnd")
                            }
                        >
                            Entrar neste mundo
                        </button>
                    </div>
                </div>


                <div className="world world-ordem">
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
                            onClick={() =>
                                setTheme("ordem")
                            }
                        >
                            Entrar neste mundo
                        </button>
                    </div>
                </div>

            </div>


            <div className="particles">
                {Array.from({
                    length: 25,
                }).map((_, index) => (
                    <span
                        key={index}
                        className="particle"
                        style={{
                            "--delay": `${
                                Math.random() * 8
                            }s`,
                            "--left": `${
                                Math.random() * 100
                            }%`,
                            "--duration": `${
                                5 +
                                Math.random() * 8
                            }s`,
                        }}
                    />
                ))}
            </div>


            <SideMenu />

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


            <motion.section
    className="hero"
    initial={{
        opacity: 0,
        x: "-50%",
        y: 20,
    }}
    animate={{
        opacity: 1,
        x: "-50%",
        y: 0,
    }}
    transition={{
        delay: 1.8,
        duration: 1,
    }}
>
            >

                <div className="hero-symbol">
                    <Sparkles />
                </div>

                <span className="hero-small">
                    BEM-VINDO À
                </span>

                <h1>
                    ORDO
                    <strong>RPGISTAS</strong>
                </h1>

                <p className="hero-subtitle">
                    Onde histórias ganham vida.
                </p>

                <div className="hero-divider">
                    <span />
                    ✦
                    <span />
                </div>

                <p className="hero-description">
                    Um lugar onde você e seus amigos
                    podem criar mundos, viver aventuras
                    e escrever histórias que nunca
                    acontecerão duas vezes da mesma forma.
                </p>

                <div className="hero-actions">
                    <MagicalButton>
                        Criar minha conta
                    </MagicalButton>

                    <MagicalButton variant="secondary"
                         onClick={onRegister}
                        >
                        Conheça o RPG
                    </MagicalButton>
                </div>

            </motion.section>


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
