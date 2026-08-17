import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroLoader() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 1800);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: {
                            duration: 0.8,
                        },
                    }}
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 99999,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background:
                            "radial-gradient(circle at center, #24180d 0%, #090807 45%, #030303 100%)",
                        color: "#d7ae57",
                        overflow: "hidden",
                    }}
                >
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.8,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                        }}
                        style={{
                            textAlign: "center",
                        }}
                    >
                        <motion.div
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            style={{
                                width: 80,
                                height: 80,
                                margin: "0 auto 25px",
                                border:
                                    "1px solid rgba(215,174,87,0.5)",
                                borderRadius: "50%",
                                display: "grid",
                                placeItems: "center",
                                fontSize: 30,
                            }}
                        >
                            ✦
                        </motion.div>

                        <div
                            style={{
                                fontFamily:
                                    "Georgia, serif",
                                fontSize: 13,
                                letterSpacing:
                                    "0.45em",
                                marginLeft:
                                    "0.45em",
                                opacity: 0.7,
                            }}
                        >
                            ORDO
                        </div>

                        <h1
                            style={{
                                margin: "8px 0 0",
                                fontFamily:
                                    "Georgia, serif",
                                fontSize: 34,
                                fontWeight: 400,
                                letterSpacing:
                                    "0.12em",
                            }}
                        >
                            RPGISTAS
                        </h1>

                        <motion.p
                            animate={{
                                opacity: [
                                    0.3,
                                    1,
                                    0.3,
                                ],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                            }}
                            style={{
                                marginTop: 20,
                                fontSize: 11,
                                letterSpacing:
                                    "0.3em",
                            }}
                        >
                            PREPARANDO SUA AVENTURA...
                        </motion.p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
