import { useState } from "react";

import {
    Menu,
    X,
    User,
    Sword,
    Map,
    BookOpen,
    Search,
    Users,
    Dices,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import "./SideMenu.css";

export default function SideMenu() {
    const [open, setOpen] =
        useState(false);

    const menuItems = [
        {
            name: "Personagens",
            icon: User,
        },
        {
            name: "Campanhas",
            icon: Sword,
        },
        {
            name: "Mapa",
            icon: Map,
        },
        {
            name: "Livros",
            icon: BookOpen,
        },
        {
            name: "Criar Tokens",
            icon: Dices,
        },
        {
            name: "Buscar jogadores",
            icon: Users,
        },
        {
            name: "Buscar campanhas",
            icon: Search,
        },
    ];

    return (
        <>
            <motion.button
                className="menu-trigger"
                onClick={() =>
                    setOpen(!open)
                }
                whileTap={{
                    scale: 0.9,
                }}
            >
                {open
                    ? <X size={23} />
                    : <Menu size={23} />
                }
            </motion.button>

            <AnimatePresence>
                {open && (
                    <motion.aside
                        className="side-menu"
                        initial={{
                            x: -320,
                            opacity: 0,
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                        }}
                        exit={{
                            x: -320,
                            opacity: 0,
                        }}
                        transition={{
                            type: "spring",
                            damping: 22,
                            stiffness: 220,
                        }}
                    >
                        <div className="side-menu-header">

                            <span>
                                ORDO
                            </span>

                            <strong>
                                RPGISTAS
                            </strong>

                        </div>

                        <div className="side-menu-divider">
                            ✦
                        </div>

                        <nav className="side-menu-items">

                            {menuItems.map(
                                ({
                                    name,
                                    icon: Icon,
                                }) => (
                                    <button
                                        key={name}
                                        className="side-menu-item"
                                        onClick={() =>
                                            setOpen(false)
                                        }
                                    >
                                        <Icon size={19} />

                                        <span>
                                            {name}
                                        </span>
                                    </button>
                                )
                            )}

                        </nav>

                    </motion.aside>
                )}
            </AnimatePresence>
        </>
    );
}
