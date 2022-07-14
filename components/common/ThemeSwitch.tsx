import { useTheme } from 'next-themes';

import { MoonIcon, SunIcon } from '@components/icons';
import { useEffect, useState } from 'react';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <button
          aria-label="Theme Toggle Button"
          type="button"
          onClick={handleTheme}
          className="p-3 transition border-2 border-gray-200 dark:hover:border-white hover:border-black rounded-3xl dark:border-gray-600"
        >
          <div className="relative w-5 h-5 overflow-hidden">
            <span
              className={`absolute inset-0 origin-[50%_100px] duration-700 ${
                theme === 'light' ? 'rotate-0' : '-rotate-90'
              }`}
            >
              <SunIcon className="text-black fill-current dark:text-white" />
            </span>

            <span
              className={`absolute inset-0 origin-[50%_100px] duration-700 ${
                theme === 'dark' ? 'rotate-0' : 'rotate-90'
              }`}
            >
              <MoonIcon className="text-black fill-current dark:text-white" />
            </span>
          </div>
        </button>
      )}
    </>
  );
};

export default ThemeSwitch;
