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
