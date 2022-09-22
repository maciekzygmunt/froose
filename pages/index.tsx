import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const MainPage = dynamic(() => import('../modules/MainPage/MainPage'), { ssr: false });

const Home: NextPage = () => {
  return <MainPage />;
};

export default Home;
