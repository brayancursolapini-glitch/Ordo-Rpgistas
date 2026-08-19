import { motion } from "framer-motion";

import {
    ArrowLeft,
    User,
    Mail,
    Lock,
    UserPlus,
} from "lucide-react";

import {
    useState,
} from "react";

import { useUser } from "../../context/UserContext";

import "./Cadastro.css";

export default function Cadastro({
    onBack,
    onComplete,
}) {
    const [username, setUsername] =
        useState("");

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [confirmPassword, setConfirmPassword] =
        useState("");

    const [error, setError] =
        useState("");

    const { login } = useUser();

    function handleSubmit(event) {
        event.preventDefault();

        setError("");

        if (!username.trim()) {
            setError(
                "Digite um nome de usuário."
            );

            return;
        }

        if (!email.trim()) {
            setError(
                "Digite seu e-mail."
            );

            return;
        }

        if (password.length < 4) {
            setError(
                "A senha precisa ter pelo menos 4 caracteres."
            );

            return;
        }

        if (password !== confirmPassword) {
            setError(
                "As senhas não são iguais."
            );

            return;
        }

        /*
            FUTURAMENTE:

            Aqui será enviado o cadastro
            para o backend.

            Por enquanto apenas criamos
            o usuário localmente.
        */

        const newUser = {
            name: username,
            username,
            email,
            avatar: null,
        };

        login(newUser);

        onComplete();
    }

    return (
        <main className="cadastro-page">

            <div className="cadastro-background" />

            <motion.section
                className="cadastro-card"

                initial={{
                    opacity: 0,
                    y: 30,
                }}

                animate={{
                    opacity: 1,
                    y: 0,
                }}

                transition={{
                    duration: 0.5,
                }}
            >

                <button
                    className="cadastro-back"
                    onClick={onBack}
                >

                    <ArrowLeft size={18} />

                    Voltar

                </button>


                <div className="cadastro-header">

                    <span>
                        SUA JORNADA COMEÇA AGORA
                    </span>

                    <h1>
                        CRIAR CONTA
                    </h1>

                    <p>
                        Crie seu personagem fora da história
                        antes de criar um dentro dela.
                    </p>

                </div>


                <div className="cadastro-divider">

                    <span />

                    ✦

                    <span />

                </div>


                <form
                    className="cadastro-form"
                    onSubmit={handleSubmit}
                >

                    <label>

                        Nome de usuário

                        <div className="cadastro-input">

                            <User size={18} />

                            <input
                                type="text"

                                placeholder="
                                Escolha seu nome de usuário
                                "

                                value={username}

                                onChange={(event) =>
                                    setUsername(
                                        event.target.value
                                    )
                                }
                            />

                        </div>

                    </label>


                    <label>

                        E-mail

                        <div className="cadastro-input">

                            <Mail size={18} />

                            <input
                                type="email"

                                placeholder="
                                Digite seu e-mail
                                "

                                value={email}

                                onChange={(event) =>
                                    setEmail(
                                        event.target.value
                                    )
                                }
                            />

                        </div>

                    </label>


                    <label>

                        Senha

                        <div className="cadastro-input">

                            <Lock size={18} />

                            <input
                                type="password"

                                placeholder="
                                Crie uma senha
                                "

                                value={password}

                                onChange={(event) =>
                                    setPassword(
                                        event.target.value
                                    )
                                }
                            />

                        </div>

                    </label>


                    <label>

                        Confirmar senha

                        <div className="cadastro-input">

                            <Lock size={18} />

                            <input
                                type="password"

                                placeholder="
                                Digite novamente sua senha
                                "

                                value={confirmPassword}

                                onChange={(event) =>
                                    setConfirmPassword(
                                        event.target.value
                                    )
                                }
                            />

                        </div>

                    </label>


                    {error && (

                        <div className="cadastro-error">
                            {error}
                        </div>

                    )}


                    <button
                        type="submit"
                        className="cadastro-submit"
                    >

                        <UserPlus size={18} />

                        Criar minha conta

                    </button>

                </form>


                <div className="cadastro-footer">

                    <p>
                        Já possui uma conta?
                    </p>

                    <button
                        onClick={onBack}
                    >
                        Fazer login
                    </button>

                </div>

            </motion.section>

        </main>
    );
}
