import { useState, useEffect } from "react";
import { SunMedium, Eclipse } from "lucide-react";

export function DarkModeToggle() {
    const [isDark, setIsDark] = useState(() => {
        try {
            const saved = localStorage.getItem("theme");
            if (saved) return saved === "dark";

            return (
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
            );
        } catch (err) {
            return false;
        }
    });

    useEffect(() => {
        const root = document.documentElement;

        if (isDark) root.classList.add("dark");
        else root.classList.remove("dark");

        try {
            localStorage.setItem("theme", isDark ? "dark" : "light");
        } catch (err) {
            // ignore
        }
    }, [isDark]);

    const toggle = () => setIsDark((v) => !v);

    return (
        <button
            onClick={toggle}
            aria-pressed={isDark}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="inline-flex items-center gap-2 px-2 hover:cursor-pointer"
            title={isDark ? "Light mode" : "Dark mode"}
        >
            <span className="sr-only">Toggle theme</span>

            {isDark ? (
                <SunMedium size={24} className="text-brand" />
            ) : (
                <Eclipse size={24} className="text-brand" />
            )}
        </button>
    );
}
