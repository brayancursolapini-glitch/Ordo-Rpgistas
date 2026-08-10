import { AnimatePresence, motion } from "framer-motion";
import {
    AlertTriangle,
    ArrowLeft,
    ArrowRight,
    Check,
    Eye,
    EyeOff,
    LockKeyhole,
    Mail,
    ShieldCheck,
    UserRound,
} from "lucide-react";

import { useState } from "react";

import AvatarPicker from "../../components/Profile/AvatarPicker";
import { useUser } from "../../context/UserContext";

import "./Cadastro.css";

const initialForm = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    avatar: null,
    favoriteSystem: "dnd",
    acceptedTerms: false,
};

export default function Cadastro({
    onBack,
    onComplete,
}) {
    const { login } = useUser();

    const [step, setStep] = useState(1);

    const [form, setForm] =
        useState(initialForm);

    const [showPassword, setShowPassword] =
        useState(false);

    const [showConfirmPassword, setShowConfirmPassword] =
        useState(false);

    const [errors, setErrors] = useState({});

    const updateField = (
        field,
        value
    ) => {
        setForm((current) => ({
            ...current,
            [field]: value,
        }));

        setErrors((current) => ({
            ...current,
            [field]: "",
        }));
    };

    const validateStepOne = () => {
        const newErrors = {};

        const usernameRegex =
            /^[a-zA-Z0-9_.-]{3,20}$/;

        if (!form.username.trim()) {
            newErrors.username =
                "Escolha um nome de usuário.";
        } else if (
            !usernameRegex.test(
                form.username
            )
        ) {
            newErrors.username =
                "Use de 3 a 20 caracteres: letras, números, _ . ou -.";
        }

        if (!form.email.trim()) {
            newErrors.email =
                "Informe seu email.";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                form.email
            )
        ) {
            newErrors.email =
                "Digite um email válido.";
        }

        if (form.password.length < 8) {
            newErrors.password =
                "A senha precisa ter pelo menos 8 caracteres.";
        }

        if (
            form.password !==
            form.confirmPassword
        ) {
            newErrors.confirmPassword =
                "As senhas não coincidem.";
        }

        setErrors(newErrors);

        return (
            Object.keys(newErrors)
                .length === 0
        );
    };

    const validateStepTwo = () => {
        if (!form.acceptedTerms) {
            setErrors({
                acceptedTerms:
                    "Você precisa aceitar os termos para continuar.",
            });

            return false;
        }

        setErrors({});

        return true;
    };

    const nextStep = () => {
        if (
            step === 1 &&
            validateStepOne()
        ) {
            setStep(2);
        }
    };

    const previousStep = () => {
        setErrors({});

        setStep((current) =>
            Math.max(1, current - 1)
        );
    };

    const finishRegistration = () => {
        if (!validateStepTwo()) {
            return;
        }

        const userData = {
            username: form.username,
            email: form.email,
            avatar: form.avatar,
            favoriteSystem:
                form.favoriteSystem,
            createdAt:
                new Date().toISOString(),
        };

        login(userData);

        onComplete();
    };

    return (
        <motion.main
            className="register-page"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
            }}
        >
            <button
                className="register-back"
                onClick={onBack}
            >
                <ArrowLeft size={18} />
                Voltar
            </button>

            <div className="register-container">
                <div className="register-brand">
                    <span>
                        ORDO
                    </span>

                    <strong>
                        RPGISTAS
                    </strong>
                </div>

                <div className="register-progress">
                    <div
                        className={
                            step >= 1
                                ? "active"
                                : ""
                        }
                    >
                        <span>1</span>
                        <small>
                            Conta
                        </small>
                    </div>

                    <div
                        className={
                            step >= 2
                                ? "active"
                                : ""
                        }
                    >
                        <span>2</span>
                        <small>
                            Perfil
                        </small>
                    </div>
                </div>

                <AnimatePresence
                    mode="wait"
                >
                    {step === 1 && (
                        <motion.section
                            key="account"
                            className="register-step"
                            initial={{
                                opacity: 0,
                                x: 30,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            exit={{
                                opacity: 0,
                                x: -30,
                            }}
                        >
                            <span className="register-label">
                                COMEÇANDO SUA JORNADA
                            </span>

                            <h1>
                                Crie sua conta.
                            </h1>

                            <p className="register-description">
                                Primeiro precisamos
                                saber quem está
                                entrando neste mundo.
                            </p>

                            <div className="permanent-warning">
                                <AlertTriangle />

                                <div>
                                    <strong>
                                        Escolha seu
                                        nome com
                                        cuidado.
                                    </strong>

                                    <p>
                                        Seu nome de
                                        usuário será
                                        permanente.
                                        Alterações
                                        futuras
                                        poderão
                                        exigir uma
                                        taxa.
                                    </p>
                                </div>
                            </div>

                            <div className="register-form">
                                <div className="field">
                                    <label>
                                        <UserRound
                                            size={14}
                                        />
                                        Nome de usuário
                                    </label>

                                    <input
                                        value={
                                            form.username
                                        }
                                        onChange={(
                                            event
                                        ) =>
                                            updateField(
                                                "username",
                                                event
                                                    .target
                                                    .value
                                            )
                                        }
                                        placeholder="Ex: Arcanista"
                                        maxLength={
                                            20
                                        }
                                    />

                                    {errors.username && (
                                        <small className="field-error">
                                            {
                                                errors.username
                                            }
                                        </small>
                                    )}
                                </div>

                                <div className="field">
                                    <label>
                                        <Mail
                                            size={14}
                                        />
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        value={
                                            form.email
                                        }
                                        onChange={(
                                            event
                                        ) =>
                                            updateField(
                                                "email",
                                                event
                                                    .target
                                                    .value
                                            )
                                        }
                                        placeholder="voce@email.com"
                                    />

                                    {errors.email && (
                                        <small className="field-error">
                                            {
                                                errors.email
                                            }
                                        </small>
                                    )}
                                </div>

                                <div className="field">
                                    <label>
                                        <LockKeyhole
                                            size={14}
                                        />
                                        Senha
                                    </label>

                                    <div className="password-input">
                                        <input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            value={
                                                form.password
                                            }
                                            onChange={(
                                                event
                                            ) =>
                                                updateField(
                                                    "password",
                                                    event
                                                        .target
                                                        .value
                                                )
                                            }
                                            placeholder="Mínimo de 8 caracteres"
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(
                                                    (
                                                        current
                                                    ) =>
                                                        !current
                                                )
                                            }
                                        >
                                            {showPassword ? (
                                                <EyeOff
                                                    size={
                                                        17
                                                    }
                                                />
                                            ) : (
                                                <Eye
                                                    size={
                                                        17
                                                    }
                                                />
                                            )}
                                        </button>
                                    </div>

                                    {errors.password && (
                                        <small className="field-error">
                                            {
                                                errors.password
                                            }
                                        </small>
                                    )}
                                </div>

                                <div className="field">
                                    <label>
                                        <ShieldCheck
                                            size={14}
                                        />
                                        Confirmar senha
                                    </label>

                                    <div className="password-input">
                                        <input
                                            type={
                                                showConfirmPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            value={
                                                form.confirmPassword
                                            }
                                            onChange={(
                                                event
                                            ) =>
                                                updateField(
                                                    "confirmPassword",
                                                    event
                                                        .target
                                                        .value
                                                )
                                            }
                                            placeholder="Digite novamente"
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowConfirmPassword(
                                                    (
                                                        current
                                                    ) =>
                                                        !current
                                                )
                                            }
                                        >
                                            {showConfirmPassword ? (
                                                <EyeOff
                                                    size={
                                                        17
                                                    }
                                                />
                                            ) : (
                                                <Eye
                                                    size={
                                                        17
                                                    }
                                                />
                                            )}
                                        </button>
                                    </div>

                                    {errors.confirmPassword && (
                                        <small className="field-error">
                                            {
                                                errors.confirmPassword
                                            }
                                        </small>
                                    )}
                                </div>
                            </div>

                            <button
                                className="register-next"
                                onClick={nextStep}
                            >
                                Continuar
                                <ArrowRight
                                    size={18}
                                />
                            </button>
                        </motion.section>
                    )}

                    {step === 2 && (
                        <motion.section
                            key="profile"
                            className="register-step"
                            initial={{
                                opacity: 0,
                                x: 30,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            exit={{
                                opacity: 0,
                                x: -30,
                            }}
                        >
                            <span className="register-label">
                                SUA IDENTIDADE
                            </span>

                            <h1>
                                Crie seu perfil.
                            </h1>

                            <p className="register-description">
                                Agora deixe sua marca
                                no mundo.
                            </p>

                            <AvatarPicker
                                avatar={
                                    form.avatar
                                }
                                onChange={(
                                    value
                                ) =>
                                    updateField(
                                        "avatar",
                                        value
                                    )
                                }
                            />

                            <div className="system-selection">
                                <span>
                                    Qual mundo chama
                                    sua atenção?
                                </span>

                                <div>
                                    <button
                                        type="button"
                                        className={
                                            form.favoriteSystem ===
                                            "dnd"
                                                ? "selected"
                                                : ""
                                        }
                                        onClick={() =>
                                            updateField(
                                                "favoriteSystem",
                                                "dnd"
                                            )
                                        }
                                    >
                                        <strong>
                                            D&D
                                        </strong>

                                        <small>
                                            Fantasia,
                                            aventura e
                                            magia
                                        </small>
                                    </button>

                                    <button
                                        type="button"
                                        className={
                                            form.favoriteSystem ===
                                            "ordem"
                                                ? "selected"
                                                : ""
                                        }
                                        onClick={() =>
                                            updateField(
                                                "favoriteSystem",
                                                "ordem"
                                            )
                                        }
                                    >
                                        <strong>
                                            ORDEM
                                        </strong>

                                        <small>
                                            Mistério,
                                            terror e
                                            paranormal
                                        </small>
                                    </button>
                                </div>
                            </div>

                            <label className="terms">
                                <input
                                    type="checkbox"
                                    checked={
                                        form.acceptedTerms
                                    }
                                    onChange={(
                                        event
                                    ) =>
                                        updateField(
                                            "acceptedTerms",
                                            event
                                                .target
                                                .checked
                                        )
                                    }
                                />

                                <span>
                                    Li e aceito os
                                    termos de uso e a
                                    política de
                                    privacidade.
                                </span>
                            </label>

                            {errors.acceptedTerms && (
                                <small className="field-error terms-error">
                                    {
                                        errors.acceptedTerms
                                    }
                                </small>
                            )}

                            <div className="register-actions">
                                <button
                                    className="register-prev"
                                    onClick={
                                        previousStep
                                    }
                                >
                                    <ArrowLeft
                                        size={17}
                                    />
                                    Voltar
                                </button>

                                <button
                                    className="register-finish"
                                    onClick={
                                        finishRegistration
                                    }
                                >
                                    <Check
                                        size={18}
                                    />
                                    Criar minha conta
                                </button>
                            </div>
                        </motion.section>
                    )}
                </AnimatePresence>
            </div>
        </motion.main>
    );
}
