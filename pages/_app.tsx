import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../styles/globals.css';
import SearchBar from '../components/UI/SearchBar';
import PreferencesContextProvider from '../context/preferencesContext';
import FavoritesContextProvider from '../context/favoritesContext';
import ErrorContextProvider from '../context/errorContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Froose</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="title" content="Froose - Weather app" />
        <meta
          name="description"
          content="Use Froose to check the weather for next 14 days, make a list of your favorites places and never be surprised by the weather."
        />
        <meta
          name="keywords"
          content="weather app, most accurate weather app, sun, rain, snow, check weather"
        />
        <meta name="language" content="English" />
        <meta name="author" content="Maciej Zygmunt" />

        {/* FACEBOOK */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://froose.vercel.app/" />
        <meta property="og:title" content="Froose - Weather app" />
        <meta
          property="og:description"
          content="Use Froose to check the weather for next 14 days, make a list of your favorites places and never be surprised by the weather."
        />
        <meta property="og:image" content="/froose_logo_og.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://froose.vercel.app/" />
        <meta property="twitter:title" content="Froose - Weather app" />
        <meta
          property="twitter:description"
          content="Use Froose to check the weather for next 14 days, make a list of your favorites places and never be surprised by the weather."
        />
        <meta property="twitter:image" content="/froose_logo_og_twitter.png" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <FavoritesContextProvider>
          <PreferencesContextProvider>
            <ErrorContextProvider>
              <div className="antialiased">
                <Toaster />
                <SearchBar />
                <Component {...pageProps} />
              </div>
            </ErrorContextProvider>
          </PreferencesContextProvider>
        </FavoritesContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
