import { motion } from "framer-motion";
import { Camera, UserRound } from "lucide-react";

import "./AvatarPicker.css";

export default function AvatarPicker({
    avatar,
    onChange,
}) {
    const handleFile = (event) => {
        const file = event.target.files?.[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            return;
        }

        const reader = new FileReader();

        reader.onload = () => {
            onChange(reader.result);
        };

        reader.readAsDataURL(file);
    };

    return (
        <div className="avatar-picker">
            <input
                id="avatar-upload"
                type="file"
                accept="image/png,image/jpeg,image/webp"
                onChange={handleFile}
                hidden
            />

            <label htmlFor="avatar-upload">
                <motion.div
                    className="avatar-preview"
                    whileHover={{ scale: 1.04 }}
                >
                    {avatar ? (
                        <img
                            src={avatar}
                            alt="Avatar"
                        />
                    ) : (
                        <UserRound size={45} />
                    )}

                    <div className="avatar-camera">
                        <Camera size={17} />
                    </div>
                </motion.div>
            </label>

            <span>
                Escolha seu avatar
            </span>

            <small>
                PNG, JPG ou WEBP
            </small>
        </div>
    );
}
