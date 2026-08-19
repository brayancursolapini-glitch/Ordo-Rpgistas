import { motion } from "framer-motion";
import {
    ArrowLeft,
    Eye,
    EyeOff,
    Lock,
    Mail,
    LogIn,
} from "lucide-react";

import { useState } from "react";

import "./Login.css";

export default function Login({
    onBack,
    onRegister,
    onLoginSuccess,
}) {
    const [showPassword, setShowPassword] =
        useState(false);

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (!email || !password) {
            alert("Preencha todos os campos.");
            return;
        }

        /*
            TEMPORÁRIO

            Depois vamos conectar isso
            ao sistema real de usuários
            e banco de dados.
        */

        if (onLoginSuccess) {
            onLoginSuccess();
        }
    }

    return (
        <main className="login-page">

            <div className="login-background" />

            <motion.section
                className="login-container"
                initial={{
                    opacity: 0,
                    y: 30,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
            >

                {/* VOLTAR */}

                <button
                    className="login-back-button"
                    onClick={onBack}
                >
                    <ArrowLeft size={18} />

                    Voltar
                </button>


                {/* CABEÇALHO */}

                <div className="login-header">

                    <span className="login-small-title">
                        BEM-VINDO DE VOLTA
                    </span>

                    <h1>
                        ENTRAR
                    </h1>

                    <p>
                        Sua próxima aventura
                        está esperando por você.
                    </p>

                </div>


                {/* FORMULÁRIO */}

                <form
                    className="login-form"
                    onSubmit={handleSubmit}
                >

                    {/* EMAIL */}

                    <div className="login-input-group">

                        <label>
                            E-mail
                        </label>

                        <div className="login-input-wrapper">

                            <Mail size={19} />

                            <input
                                type="email"
                                placeholder="Digite seu e-mail"
                                value={email}
                                onChange={(event) =>
                                    setEmail(
                                        event.target.value
                                    )
                                }
                            />

                        </div>

                    </div>


                    {/* SENHA */}

                    <div className="login-input-group">

                        <label>
                            Senha
                        </label>

                        <div className="login-input-wrapper">

                            <Lock size={19} />

                            <input
                                type={
                                    showPassword
                                        ? "text"
                                        : "password"
                                }
                                placeholder="Digite sua senha"
                                value={password}
                                onChange={(event) =>
                                    setPassword(
                                        event.target.value
                                    )
                                }
                            />

                            <button
                                type="button"
                                className="login-password-toggle"
                                onClick={() =>
                                    setShowPassword(
                                        !showPassword
                                    )
                                }
                            >
                                {showPassword
                                    ? (
                                        <EyeOff size={19} />
                                    )
                                    : (
                                        <Eye size={19} />
                                    )}
                            </button>

                        </div>

                    </div>


                    {/* OPÇÕES */}

                    <div className="login-options">

                        <label className="login-remember-option">

                            <input type="checkbox" />

                            <span>
                                Lembrar de mim
                            </span>

                        </label>


                        <button
                            type="button"
                            className="login-forgot-password"
                        >
                            Esqueci minha senha
                        </button>

                    </div>


                    {/* BOTÃO */}

                    <motion.button
                        type="submit"
                        className="login-submit"
                        whileHover={{
                            scale: 1.02,
                        }}
                        whileTap={{
                            scale: 0.98,
                        }}
                    >

                        <LogIn size={20} />

                        Entrar na aventura

                    </motion.button>

                </form>


                {/* RODAPÉ */}

                <div className="login-footer">

                    <span>
                        Ainda não possui uma conta?
                    </span>

                    <button
                        type="button"
                        onClick={onRegister}
                    >
                        Criar uma conta
                    </button>

                </div>

            </motion.section>

        </main>
    );
}
