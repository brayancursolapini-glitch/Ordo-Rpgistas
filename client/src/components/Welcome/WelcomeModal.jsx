import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowRight,
    BookOpen,
    Dice5,
    Sparkles,
    Users,
} from "lucide-react";

import { useUser } from "../../context/UserContext";

import "./WelcomeModal.css";

export default function WelcomeModal() {
    const {
        firstVisit,
        completeFirstVisit,
    } = useUser();

    if (!firstVisit) {
        return null;
    }

    const handleContinue = () => {
        completeFirstVisit();
    };

    return (
        <AnimatePresence>
            {firstVisit && (
                <motion.div
                    className="welcome-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="welcome-modal"
                        initial={{
                            opacity: 0,
                            scale: 0.92,
                            y: 30,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                    >
                        <div className="welcome-glow" />

                        <motion.div
                            className="welcome-icon"
                            animate={{
                                rotate: [
                                    0,
                                    -8,
                                    8,
                                    0,
                                ],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                            }}
                        >
                            <Sparkles size={34} />
                        </motion.div>

                        <span className="welcome-label">
                            BEM-VINDO À ORDO RPGISTAS
                        </span>

                        <h1>
                            E se você pudesse
                            <br />
                            <strong>
                                viver outra vida?
                            </strong>
                        </h1>

                        <p className="welcome-text">
                            RPG é muito mais do que
                            jogar dados.
                        </p>

                        <p className="welcome-description">
                            É você e seus amigos
                            entrando em um mundo
                            completamente novo,
                            criando personagens,
                            tomando decisões e
                            construindo uma história
                            que ninguém sabe como vai
                            terminar.
                        </p>

                        <div className="welcome-features">
                            <div>
                                <Dice5 />
                                <span>
                                    Role os dados
                                </span>
                            </div>

                            <div>
                                <Users />
                                <span>
                                    Jogue com amigos
                                </span>
                            </div>

                            <div>
                                <BookOpen />
                                <span>
                                    Crie histórias
                                </span>
                            </div>
                        </div>

                        <motion.button
                            className="welcome-button"
                            onClick={handleContinue}
                            whileHover={{
                                scale: 1.03,
                            }}
                            whileTap={{
                                scale: 0.97,
                            }}
                        >
                            <span>
                                Quero descobrir
                            </span>

                            <ArrowRight size={18} />
                        </motion.button>

                        <button
                            className="welcome-skip"
                            onClick={handleContinue}
                        >
                            Pular introdução
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
