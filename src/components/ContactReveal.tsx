"use client";
import { useState } from "react";
import { MdEmail, MdPhone } from "react-icons/md";

type Props = {
    kind: "email" | "phone";
    value?: string;
};

export function ContactReveal({ kind, value }: Props) {
    const [visible, setVisible] = useState(false);
    const [copied, setCopied] = useState(false);

    if (!value) return null;

    const isEmail = kind === "email";
    const label = isEmail ? "Email" : "Phone";
    const Icon = isEmail ? MdEmail : MdPhone;
    const href = isEmail ? `mailto:${value}` : `tel:${value}`;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(value);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            console.error("Copy failed");
        }
    };

    return (
        <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
            {!visible ? (
                <button
                    onClick={() => setVisible(true)}
                    className="flex items-center gap-1 transition text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
                >
                    <Icon size={15} />
                    Show {label}
                </button>
            ) : (
                <div className="flex items-center gap-3">
                    <a
                        href={href}
                        className="break-all transition text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
                    >
                        {value}
                    </a>

                    <button
                        onClick={handleCopy}
                        className="text-xs px-2 py-1 rounded transition bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"
                    >
                        {copied ? "Copied" : "Copy"}
                    </button>
                </div>
            )}
        </div>
    );
}

export default ContactReveal;
