const HomePage = () => {
  const setTheme = () => {
    localStorage.theme = localStorage.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark');
  };

  return (
    <>
      <div className="text-3xl font-medium">Hello World!</div>
      <button
        onClick={setTheme}
        className="p-1 mt-4 border-2 rounded border-slate-800"
      >
        Toggle Theme
      </button>
    </>
  );
};

export default HomePage;
