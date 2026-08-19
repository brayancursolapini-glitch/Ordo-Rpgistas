import { motion } from "framer-motion";

import "./MagicalButton.css";

export default function MagicalButton({
    children,
    variant = "primary",
    onClick,
    type = "button",
}) {
    return (
        <motion.button
            type={type}
            className={`magical-button ${variant}`}
            onClick={onClick}
            whileHover={{
                scale: 1.04,
                y: -2,
            }}
            whileTap={{
                scale: 0.97,
            }}
        >
            <span className="magical-button-content">
                {children}
            </span>
        </motion.button>
    );
}
