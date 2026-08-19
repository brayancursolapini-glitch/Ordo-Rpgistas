import { motion } from "framer-motion";

import {
    ArrowLeft,
    User,
    Mail,
    Lock,
    Eye,
    EyeOff,
    ShieldCheck,
    UserPlus,
} from "lucide-react";

import { useState } from "react";

import "./Cadastro.css";

export default function Cadastro({
    onBack,
    onComplete,
}) {
    const [showPassword, setShowPassword] =
        useState(false);

    const [showConfirmPassword, setShowConfirmPassword] =
        useState(false);

    const [username, setUsername] =
        useState("");

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [confirmPassword, setConfirmPassword] =
        useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (
            !username ||
            !email ||
            !password ||
            !confirmPassword
        ) {
            alert(
                "Preencha todos os campos."
            );

            return;
        }

        if (password !== confirmPassword) {
            alert(
                "As senhas não coincidem."
            );

            return;
        }

        /*
            MAIS PARA FRENTE:

            Aqui vamos conectar o cadastro
            ao banco de dados.

            Também vamos implementar:

            - Nome de usuário único
            - E-mail único
            - Criptografia de senha
            - Verificação por e-mail
            - Autenticação em duas etapas
        */

        if (onComplete) {
            onComplete();
        }
    }

    return (
        <main className="cadastro-page">

            <motion.div
                className="cadastro-background"
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
            />


            <motion.section
                className="cadastro-container"
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

                <button
                    className="back-button"
                    onClick={onBack}
                >
                    <ArrowLeft size={20} />

                    Voltar
                </button>


                <div className="cadastro-header">

                    <span className="cadastro-small-title">
                        COMECE SUA JORNADA
                    </span>

                    <h1>
                        CRIAR CONTA
                    </h1>

                    <p>
                        Crie seu perfil e comece
                        a escrever sua própria história.
                    </p>

                </div>


                <form
                    className="cadastro-form"
                    onSubmit={handleSubmit}
                >

                    <div className="input-group">

                        <label>
                            Nome de usuário
                        </label>

                        <div className="input-wrapper">

                            <User size={19} />

                            <input
                                type="text"
                                placeholder="Escolha seu nome"
                                value={username}
                                onChange={(event) =>
                                    setUsername(
                                        event.target.value
                                    )
                                }
                            />

                        </div>

                        <small className="username-warning">

                            Escolha com cuidado.
                            O nome de usuário poderá
                            ser alterado futuramente
                            apenas através das opções
                            disponíveis na sua conta.

                        </small>

                    </div>


                    <div className="input-group">

                        <label>
                            E-mail
                        </label>

                        <div className="input-wrapper">

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


                    <div className="input-group">

                        <label>
                            Senha
                        </label>

                        <div className="input-wrapper">

                            <Lock size={19} />

                            <input
                                type={
                                    showPassword
                                        ? "text"
                                        : "password"
                                }
                                placeholder="Crie uma senha"
                                value={password}
                                onChange={(event) =>
                                    setPassword(
                                        event.target.value
                                    )
                                }
                            />

                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() =>
                                    setShowPassword(
                                        !showPassword
                                    )
                                }
                            >
                                {showPassword
                                    ? (
                                        <EyeOff
                                            size={19}
                                        />
                                    )
                                    : (
                                        <Eye
                                            size={19}
                                        />
                                    )}
                            </button>

                        </div>

                    </div>


                    <div className="input-group">

                        <label>
                            Confirmar senha
                        </label>

                        <div className="input-wrapper">

                            <Lock size={19} />

                            <input
                                type={
                                    showConfirmPassword
                                        ? "text"
                                        : "password"
                                }
                                placeholder="Digite sua senha novamente"
                                value={confirmPassword}
                                onChange={(event) =>
                                    setConfirmPassword(
                                        event.target.value
                                    )
                                }
                            />

                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() =>
                                    setShowConfirmPassword(
                                        !showConfirmPassword
                                    )
                                }
                            >
                                {showConfirmPassword
                                    ? (
                                        <EyeOff
                                            size={19}
                                        />
                                    )
                                    : (
                                        <Eye
                                            size={19}
                                        />
                                    )}
                            </button>

                        </div>

                    </div>


                    <div className="security-info">

                        <ShieldCheck
                            size={20}
                        />

                        <p>
                            Sua conta será protegida
                            e posteriormente poderá
                            utilizar autenticação
                            em duas etapas.
                        </p>

                    </div>


                    <motion.button
                        type="submit"
                        className="cadastro-submit"
                        whileHover={{
                            scale: 1.02,
                        }}
                        whileTap={{
                            scale: 0.98,
                        }}
                    >

                        <UserPlus size={20} />

                        Criar minha conta

                    </motion.button>

                </form>


                <div className="cadastro-footer">

                    <span>
                        Já possui uma conta?
                    </span>

                    <button
                        type="button"
                        onClick={onBack}
                    >
                        Entrar
                    </button>

                </div>

            </motion.section>

        </main>
    );
}
