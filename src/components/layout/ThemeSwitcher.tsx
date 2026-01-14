'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-16 h-8 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 opacity-50" />
        );
    }

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[10px] font-mono transition-all duration-200",
                // Firefox-compatible solid backgrounds (no backdrop-blur)
                "bg-slate-100 dark:bg-slate-800",
                "text-slate-700 dark:text-slate-300",
                "hover:bg-slate-200 dark:hover:bg-slate-700",
                "border border-slate-200 dark:border-slate-700",
                "focus:outline-none focus:ring-2 focus:ring-precision-blue focus:ring-offset-1"
            )}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        >
            <motion.div
                key={theme}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
            >
                {theme === 'light' ? (
                    <Sun className="h-3.5 w-3.5 text-execution-orange" />
                ) : (
                    <Moon className="h-3.5 w-3.5 text-precision-blue" />
                )}
            </motion.div>
            <span className="uppercase tracking-tight font-semibold">
                {theme === 'light' ? 'Light' : 'Dark'}
            </span>
        </button>
    );
}
