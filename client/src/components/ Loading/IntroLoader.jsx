import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroLoader() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 1800);

        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <motion.div
            className="intro-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="intro-symbol"
                initial={{
                    scale: 0.5,
                    opacity: 0,
                }}
                animate={{
                    scale: 1,
                    opacity: 1,
                }}
                transition={{
                    duration: 1,
                }}
            >
                ✦
            </motion.div>

            <motion.h1
                initial={{
                    opacity: 0,
                    letterSpacing: "0.8em",
                }}
                animate={{
                    opacity: 1,
                    letterSpacing: "0.25em",
                }}
                transition={{
                    duration: 1.2,
                }}
            >
                ORDO RPGISTAS
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: 0.8,
                }}
            >
                Onde histórias ganham vida.
            </motion.p>
        </motion.div>
    );
}
