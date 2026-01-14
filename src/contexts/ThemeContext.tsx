'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    // TODO: Fix theme switcher rendering issue - currently forced to 'light' mode only
    const [theme, setThemeState] = useState<Theme>('light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // TODO: Fix theme switcher - currently ignoring localStorage and system preference, forcing light mode
        // const storedTheme = localStorage.getItem('trigonal-theme') as Theme;
        // if (storedTheme) {
        //     setThemeState(storedTheme);
        // } else {
        //     // Check system preference
        //     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        //     setThemeState(prefersDark ? 'dark' : 'light');
        // }
        
        // TEMPORARY FIX: Force light mode
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
    }, []);

    useEffect(() => {
        if (!mounted) return;

        // TODO: Fix theme switcher - currently forcing light mode only
        // Update document class and localStorage
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        // localStorage.setItem('trigonal-theme', theme);
    }, [theme, mounted]);

    const toggleTheme = () => {
        // TODO: Fix theme switcher - toggle functionality disabled
        // setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    const setTheme = (newTheme: Theme) => {
        // TODO: Fix theme switcher - setTheme functionality disabled
        // setThemeState(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
