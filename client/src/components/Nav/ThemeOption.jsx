import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';

const ThemeOption = () => {
    const [enabled, setEnabled] = useState(true);

    useEffect(() => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const storedTheme = localStorage.getItem('theme');

        if (storedTheme === 'dark') {
            setEnabled(true);
            document.documentElement.classList.add('dark');
        } else if (storedTheme === 'light') {
            setEnabled(false);
            document.documentElement.classList.remove('dark');
        } else if (prefersDark) {
            setEnabled(true);
            document.documentElement.classList.add('dark');
        } else {
            setEnabled(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const handleThemeChange = () => {
        setEnabled(!enabled);
        if (!enabled) {
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
        } else {
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <button
            onClick={handleThemeChange}
            className="flex items-center rounded-full  p-2 hover:bg-gray-300 dark:hover:bg-orange-500 dark:bg-orange-600"
        >
            {enabled ? (
                <MoonIcon className="h-8 w-8 text-slate-100" />
            ) : (
                <SunIcon className="h-8 w-8 text-slate-500" />
            )}
        </button>
    );
};
export default ThemeOption;
