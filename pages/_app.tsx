import '../styles/globals.css';
import type { AppProps } from 'next/app';
import SearchBar from '../components/SearchBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="antialiased">
      <SearchBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
