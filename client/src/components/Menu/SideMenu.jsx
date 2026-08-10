import { motion, AnimatePresence } from "framer-motion";
import {
    Menu,
    X,
    Home,
    Users,
    Map,
    BookOpen,
    UserRound,
    Sword,
    Search,
    Settings,
    Heart,
} from "lucide-react";
import { useState } from "react";

const menuItems = [
    {
        label: "Início",
        icon: Home,
    },
    {
        label: "Personagens",
        icon: UserRound,
    },
    {
        label: "Campanhas",
        icon: Sword,
    },
    {
        label: "Mapas",
        icon: Map,
    },
    {
        label: "Livros",
        icon: BookOpen,
    },
    {
        label: "Criar Tokens",
        icon: Users,
    },
    {
        label: "Buscar Jogadores",
        icon: Search,
    },
    {
        label: "Buscar Campanhas",
        icon: Search,
    },
    {
        label: "Configurações",
        icon: Settings,
    },
    {
        label: "Apoie o projeto",
        icon: Heart,
    },
];

export default function SideMenu() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <motion.button
                className="menu-toggle"
                onClick={() => setOpen(true)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.9 }}
            >
                <Menu size={25} />
            </motion.button>

            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            className="menu-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                        />

                        <motion.aside
                            className="side-menu"
                            initial={{
                                x: "-100%",
                            }}
                            animate={{
                                x: 0,
                            }}
                            exit={{
                                x: "-100%",
                            }}
                            transition={{
                                type: "spring",
                                damping: 25,
                                stiffness: 200,
                            }}
                        >
                            <div className="side-menu-header">
                                <div>
                                    <small>ORDO</small>
                                    <h2>RPGISTAS</h2>
                                </div>

                                <button
                                    onClick={() =>
                                        setOpen(false)
                                    }
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <nav>
                                {menuItems.map(
                                    (item) => {
                                        const Icon =
                                            item.icon;

                                        return (
                                            <motion.button
                                                key={
                                                    item.label
                                                }
                                                className="menu-item"
                                                whileHover={{
                                                    x: 8,
                                                }}
                                            >
                                                <Icon
                                                    size={
                                                        20
                                                    }
                                                />

                                                <span>
                                                    {
                                                        item.label
                                                    }
                                                </span>
                                            </motion.button>
                                        );
                                    }
                                )}
                            </nav>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
