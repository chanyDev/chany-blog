import { useTheme } from 'next-themes';

import { MoonIcon, SunIcon } from '@components/icons';
import { useEffect, useState } from 'react';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <button
          onClick={handleTheme}
          className="p-3 transition border-2 border-gray-200 dark:hover:border-white hover:border-black rounded-3xl dark:border-gray-600"
        >
          <div className="relative w-5 h-5 overflow-hidden">
            <span
              className={`absolute inset-0 origin-[50%_100px] duration-500 ${
                theme === 'light' ? 'rotate-0' : '-rotate-90'
              }`}
            >
              <SunIcon className="fill-current" />
            </span>
            <span
              className={`absolute inset-0 origin-[50%_100px]  duration-500 ${
                theme === 'dark' ? 'rotate-0' : 'rotate-90'
              }`}
            >
              <MoonIcon className="fill-current" />
            </span>
          </div>
        </button>
      )}
    </>
  );
};

export default ThemeSwitch;
