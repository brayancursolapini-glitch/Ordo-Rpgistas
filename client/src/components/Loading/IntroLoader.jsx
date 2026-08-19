import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import "./IntroLoader.css";

export default function IntroLoader() {
    const [visible, setVisible] =
        useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 1800);

        return () =>
            clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="intro-loader"
                    initial={{
                        opacity: 1,
                    }}
                    exit={{
                        opacity: 0,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                >
                    <motion.div
                        className="intro-loader-content"
                        initial={{
                            opacity: 0,
                            scale: 0.9,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.5,
                        }}
                    >
                        <div className="loader-symbol">
                            ✦
                        </div>

                        <h1>
                            ORDO
                            <span>
                                RPGISTAS
                            </span>
                        </h1>

                        <p>
                            PREPARANDO SUA AVENTURA
                        </p>

                        <div className="loader-line">
                            <motion.div
                                className="loader-progress"
                                initial={{
                                    width: "0%",
                                }}
                                animate={{
                                    width: "100%",
                                }}
                                transition={{
                                    duration: 1.4,
                                }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
