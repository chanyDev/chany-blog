import { useTheme } from 'next-themes';

const HomePage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="text-3xl font-medium">Hello World!</div>
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="p-1 mt-4 border-2 rounded border-slate-800"
      >
        Toggle Theme
      </button>
    </>
  );
};

export default HomePage;
