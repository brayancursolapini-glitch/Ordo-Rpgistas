import { motion } from "framer-motion";

export default function MagicalButton({
    children,
    onClick,
    type = "button",
    disabled = false,
    className = "",
}) {
    return (
        <motion.button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={className}
            whileHover={
                disabled
                    ? {}
                    : {
                          scale: 1.04,
                          y: -2,
                      }
            }
            whileTap={
                disabled
                    ? {}
                    : {
                          scale: 0.96,
                      }
            }
            transition={{
                duration: 0.2,
            }}
            style={{
                position: "relative",
                padding: "13px 28px",
                border: "1px solid rgba(215, 174, 87, 0.55)",
                borderRadius: "8px",
                background:
                    "linear-gradient(135deg, rgba(58, 38, 17, 0.95), rgba(20, 14, 8, 0.95))",
                color: "#e6c878",
                fontFamily: "Georgia, serif",
                fontSize: "14px",
                letterSpacing: "0.08em",
                cursor: disabled ? "not-allowed" : "pointer",
                overflow: "hidden",
                boxShadow:
                    "0 0 18px rgba(215, 174, 87, 0.12)",
                opacity: disabled ? 0.5 : 1,
            }}
        >
            <motion.span
                style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
                }}
                initial={{
                    x: "-100%",
                }}
                whileHover={{
                    x: "100%",
                }}
                transition={{
                    duration: 0.6,
                }}
            />

            <span
                style={{
                    position: "relative",
                    zIndex: 1,
                }}
            >
                {children}
            </span>
        </motion.button>
    );
}
