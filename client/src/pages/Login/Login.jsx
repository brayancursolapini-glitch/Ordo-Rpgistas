import { useState } from "react";

import {
    ArrowLeft,
    Eye,
    EyeOff,
    Lock,
    Mail,
    LogIn,
} from "lucide-react";

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

    const handleSubmit = (event) => {
        event.preventDefault();

        /*
            POR ENQUANTO:
            Não temos backend ainda.

            Então qualquer preenchimento
            permite testar a entrada.
        */

        if (!email.trim() || !password.trim()) {
            alert(
                "Preencha seu usuário e senha."
            );

            return;
        }

        if (onLoginSuccess) {
            onLoginSuccess();
        }
    };


    return (
        <main className="login-page">

            {/* =========================
                FUNDO
            ========================= */}

            <div className="login-background" />


            {/* =========================
                BOTÃO VOLTAR
            ========================= */}

            <button
                type="button"
                className="login-back-button"
                onClick={onBack}
            >
                <ArrowLeft size={18} />

                Voltar
            </button>


            {/* =========================
                PAINEL
            ========================= */}

            <section className="login-container">

                {/* =========================
                    CABEÇALHO
                ========================= */}

                <header className="login-header">

                    <span className="login-small-title">
                        BEM-VINDO DE VOLTA
                    </span>

                    <h1>
                        ENTRAR
                    </h1>

                    <p>
                        Continue sua aventura.
                        Seu mundo ainda está esperando.
                    </p>

                </header>


                {/* =========================
                    FORMULÁRIO
                ========================= */}

                <form
                    className="login-form"
                    onSubmit={handleSubmit}
                >

                    {/* EMAIL */}

                    <div className="login-input-group">

                        <label htmlFor="login-email">
                            EMAIL OU USUÁRIO
                        </label>

                        <div className="login-input-wrapper">

                            <Mail size={18} />

                            <input
                                id="login-email"
                                type="text"
                                placeholder="Digite seu email ou usuário"
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

                        <label htmlFor="login-password">
                            SENHA
                        </label>

                        <div className="login-input-wrapper">

                            <Lock size={18} />

                            <input
                                id="login-password"
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
                                aria-label={
                                    showPassword
                                        ? "Ocultar senha"
                                        : "Mostrar senha"
                                }
                            >
                                {showPassword ? (
                                    <EyeOff size={18} />
                                ) : (
                                    <Eye size={18} />
                                )}
                            </button>

                        </div>

                    </div>


                    {/* OPÇÕES */}

                    <div className="login-options">

                        <label className="login-remember-option">

                            <input
                                type="checkbox"
                            />

                            <span>
                                Lembrar de mim
                            </span>

                        </label>


                        <button
                            type="button"
                            className="login-forgot-password"
                            onClick={() => {
                                alert(
                                    "A recuperação de senha será implementada em breve."
                                );
                            }}
                        >
                            Esqueci minha senha
                        </button>

                    </div>


                    {/* ENTRAR */}

                    <button
                        type="submit"
                        className="login-submit"
                    >

                        <LogIn size={18} />

                        ENTRAR NA AVENTURA

                    </button>

                </form>


                {/* =========================
                    CADASTRO
                ========================= */}

                <footer className="login-footer">

                    <span>
                        Ainda não possui uma conta?
                    </span>

                    <button
                        type="button"
                        onClick={onRegister}
                    >
                        Criar conta
                    </button>

                </footer>

            </section>

        </main>
    );
}
