import { motion } from "framer-motion";
import { Moon, Shield } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="theme-switcher">
            <motion.button
                className={`theme-option ${
                    theme === "dnd" ? "active" : ""
                }`}
                onClick={() => setTheme("dnd")}
                whileTap={{ scale: 0.9 }}
            >
                <Shield size={18} />
                <span>D&D</span>
            </motion.button>

            <motion.button
                className={`theme-option ${
                    theme === "ordem" ? "active" : ""
                }`}
                onClick={() => setTheme("ordem")}
                whileTap={{ scale: 0.9 }}
            >
                <Moon size={18} />
                <span>Ordem</span>
            </motion.button>
        </div>
    );
}
