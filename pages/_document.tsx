import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  const setTheme = `if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }`;

  return (
    <Html lang="ko">
      <Head />
      <body>
        <script dangerouslySetInnerHTML={{ __html: setTheme }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
