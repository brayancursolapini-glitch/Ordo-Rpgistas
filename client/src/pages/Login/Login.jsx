import { motion } from "framer-motion";
import {
    ArrowLeft,
    Eye,
    EyeOff,
    LogIn,
} from "lucide-react";
import { useState } from "react";

import { useUser } from "../../context/UserContext";

import "./Login.css";

export default function Login({
    onBack,
}) {
    const { login } = useUser();

    const [showPassword, setShowPassword] =
        useState(false);

    const [form, setForm] = useState({
        identifier: "",
        password: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        if (
            !form.identifier ||
            !form.password
        ) {
            return;
        }

        login({
            username: form.identifier,
            avatar: null,
        });

        onBack();
    };

    return (
        <motion.div
            className="auth-page"
            initial={{
                opacity: 0,
                x: 40,
            }}
            animate={{
                opacity: 1,
                x: 0,
            }}
            exit={{
                opacity: 0,
                x: -40,
            }}
        >
            <button
                className="auth-back"
                onClick={onBack}
            >
                <ArrowLeft size={18} />
                Voltar
            </button>

            <div className="auth-container">
                <div className="auth-logo">
                    ORDO
                    <span>RPGISTAS</span>
                </div>

                <span className="auth-label">
                    RETORNANDO À AVENTURA
                </span>

                <h1>
                    Bem-vindo de volta.
                </h1>

                <p>
                    Suas histórias estão esperando
                    por você.
                </p>

                <form
                    onSubmit={handleSubmit}
                >
                    <label>
                        Email ou nome de usuário
                    </label>

                    <input
                        type="text"
                        value={form.identifier}
                        onChange={(event) =>
                            setForm({
                                ...form,
                                identifier:
                                    event.target.value,
                            })
                        }
                        placeholder="Digite seu usuário"
                    />

                    <label>
                        Senha
                    </label>

                    <div className="password-field">
                        <input
                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }
                            value={
                                form.password
                            }
                            onChange={(event) =>
                                setForm({
                                    ...form,
                                    password:
                                        event.target
                                            .value,
                                })
                            }
                            placeholder="Digite sua senha"
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowPassword(
                                    !showPassword
                                )
                            }
                        >
                            {showPassword ? (
                                <EyeOff size={18} />
                            ) : (
                                <Eye size={18} />
                            )}
                        </button>
                    </div>

                    <button
                        className="auth-submit"
                        type="submit"
                    >
                        <LogIn size={18} />
                        Entrar
                    </button>
                </form>

                <button className="forgot-password">
                    Esqueci minha senha
                </button>
            </div>
        </motion.div>
    );
}
