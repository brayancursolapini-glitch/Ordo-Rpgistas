import { motion, AnimatePresence } from "framer-motion";
import {
    BookOpen,
    Sparkles,
    X,
} from "lucide-react";

import "./WelcomeModal.css";

export default function WelcomeModal({
    isOpen,
    onClose,
}) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="welcome-overlay"
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
                    <motion.div
                        className="welcome-modal"
                        initial={{
                            opacity: 0,
                            scale: 0.9,
                            y: 30,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.9,
                            y: 30,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                    >
                        <button
                            className="welcome-close"
                            onClick={onClose}
                            aria-label="Fechar"
                        >
                            <X size={20} />
                        </button>

                        <div className="welcome-icon">
                            <Sparkles size={30} />
                        </div>

                        <span className="welcome-small">
                            BEM-VINDO AO
                        </span>

                        <h2>
                            MUNDO DO RPG
                        </h2>

                        <div className="welcome-divider">
                            <span />
                            ✦
                            <span />
                        </div>

                        <div className="welcome-content">

                            <div className="welcome-book-icon">
                                <BookOpen size={22} />
                            </div>

                            <p>
                                O mundo do RPG é um lugar incrível
                                onde você e seus amigos podem criar,
                                viver e narrar suas próprias histórias.
                            </p>

                            <p>
                                Aqui, suas ideias e sua criatividade
                                podem decidir o rumo da aventura.
                                Você pode ser um grande herói,
                                um poderoso mago, um investigador
                                paranormal ou praticamente qualquer
                                personagem que conseguir imaginar.
                            </p>

                            <p>
                                Cada decisão pode mudar a história.
                                Uma escolha pode salvar um reino,
                                descobrir um mistério ou colocar
                                todo o grupo em perigo.
                            </p>

                        </div>

                        <button
                            className="welcome-start"
                            onClick={onClose}
                        >
                            Começar minha aventura
                        </button>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
