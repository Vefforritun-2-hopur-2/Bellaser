// src/pages/_app.tsx
import { AppProps } from 'next/app';
import Head from 'next/head';
import RootLayout from '../app/layout';
import '../app/globals.css'; // Passaðu að slóðin sé rétt

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
