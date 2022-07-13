import '@styles/global.css';

import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from '@components/common/Layout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </ThemeProvider>
  );
};

export default App;
