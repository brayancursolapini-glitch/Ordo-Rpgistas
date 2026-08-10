import { motion } from "framer-motion";

export default function MagicalButton({
    children,
    onClick,
    variant = "primary",
    type = "button",
}) {
    return (
        <motion.button
            type={type}
            className={`magical-button magical-button-${variant}`}
            onClick={onClick}
            whileHover={{
                scale: 1.04,
                y: -2,
            }}
            whileTap={{
                scale: 0.96,
            }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
            }}
        >
            <span>
                {children}
            </span>
        </motion.button>
    );
}
