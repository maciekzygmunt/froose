import '../styles/globals.css';
import type { AppProps } from 'next/app';
import SearchBar from '../components/SearchBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SearchBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
