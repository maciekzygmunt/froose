import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import SearchBar from '../components/SearchBar';
import TimeFormatProvider from '../context/timeFormatContext';

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
    <TimeFormatProvider>
      <div className="antialiased">
        <SearchBar />
        <Component {...pageProps} />
      </div>
    </TimeFormatProvider>
  );
}

export default MyApp;
