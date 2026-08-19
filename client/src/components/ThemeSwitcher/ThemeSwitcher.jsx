import { motion } from "framer-motion";

import {
    Crown,
    Eye,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

import "./ThemeSwitcher.css";

export default function ThemeSwitcher() {
    const {
        theme,
        toggleTheme,
    } = useTheme();

    const isDnd =
        theme === "dnd";

    return (
        <motion.button
            className={`theme-switcher ${
                isDnd
                    ? "dnd"
                    : "ordem"
            }`}
            onClick={toggleTheme}
            whileTap={{
                scale: 0.95,
            }}
        >
            <div className="theme-switcher-icon">

                {isDnd
                    ? (
                        <Crown size={18} />
                    )
                    : (
                        <Eye size={18} />
                    )}

            </div>

            <div className="theme-switcher-text">

                <span>
                    SISTEMA
                </span>

                <strong>

                    {isDnd
                        ? "D&D"
                        : "ORDEM"}

                </strong>

            </div>

        </motion.button>
    );
}
