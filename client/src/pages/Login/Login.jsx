import { motion } from "framer-motion";
import {
    ArrowLeft,
    Eye,
    EyeOff,
    LogIn,
    Mail,
    Lock,
} from "lucide-react";

import {
    useState,
} from "react";

import { useUser } from "../../context/UserContext";

import "./Login.css";

export default function Login({
    onBack,
    onRegister,
    onSuccess,
}) {
    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [showPassword, setShowPassword] =
        useState(false);

    const [error, setError] =
        useState("");

    const { login } = useUser();

    function handleSubmit(event) {
        event.preventDefault();

        setError("");

        if (!email.trim()) {
            setError(
                "Digite seu e-mail ou nome de usuário."
            );

            return;
        }

        if (!password.trim()) {
            setError(
                "Digite sua senha."
            );

            return;
        }

        /*
            POR ENQUANTO:

            Ainda não existe backend nem banco de dados.

            Então estamos apenas simulando o login.

            Depois vamos conectar isso ao sistema real.
        */

        const userData = {
            name: email
                .split("@")[0]
                .replace(/[^a-zA-Z0-9]/g, ""),

            email: email,

            avatar: null,
        };

        login(userData);

        onSuccess();
    }

    return (
        <main className="login-page">

            <div className="login-background" />

            <motion.section
                className="login-card"

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
                    className="login-back"
                    onClick={onBack}
                >
                    <ArrowLeft size={18} />

                    Voltar
                </button>


                <div className="login-header">

                    <span>
                        BEM-VINDO DE VOLTA
                    </span>

                    <h1>
                        ENTRAR
                    </h1>

                    <p>
                        Sua próxima aventura está esperando.
                    </p>

                </div>


                <div className="login-divider">

                    <span />

                    ✦

                    <span />

                </div>


                <form
                    onSubmit={handleSubmit}
                    className="login-form"
                >

                    <label>

                        E-mail ou usuário

                        <div className="input-wrapper">

                            <Mail size={18} />

                            <input
                                type="text"

                                placeholder="
                                Digite seu e-mail ou usuário
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

                        <div className="input-wrapper">

                            <Lock size={18} />

                            <input
                                type={
                                    showPassword
                                        ? "text"
                                        : "password"
                                }

                                placeholder="
                                Digite sua senha
                                "

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
                                            size={18}
                                        />
                                    )
                                    : (
                                        <Eye
                                            size={18}
                                        />
                                    )}

                            </button>

                        </div>

                    </label>


                    {error && (

                        <div className="login-error">
                            {error}
                        </div>

                    )}


                    <button
                        type="submit"
                        className="login-submit"
                    >

                        <LogIn size={18} />

                        Entrar na aventura

                    </button>

                </form>


                <div className="login-footer">

                    <p>
                        Ainda não possui uma conta?
                    </p>

                    <button
                        onClick={onRegister}
                    >
                        Criar minha conta
                    </button>

                </div>

            </motion.section>

        </main>
    );
}
