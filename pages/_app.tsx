import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import SearchBar from '../components/SearchBar';
import PreferencesContextProvider from '../context/preferencesContext';
import FavoritesContextProvider from '../context/favoritesContext';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();
    if (hour < 20 && hour > 5) {
      document.body.className = 'bg-gradient-to-r from-cyan-500 to-blue-500';
    } else {
      document.body.className = 'bg-gradient-to-r from-[#0A2342] to-[#283E51]';
    }
  }, []);

  return (
    <>
      <Head>
        <title>Froose</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <FavoritesContextProvider>
          <PreferencesContextProvider>
            <div className="antialiased">
              <SearchBar />
              <Component {...pageProps} />
            </div>
          </PreferencesContextProvider>
        </FavoritesContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
