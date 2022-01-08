import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '../components/organisms/Navbar/index';
import MainBanner from '../components/organisms/MainBanner/index';
import TransactionStep from '../components/organisms/TransactionStep/index';
import FeaturedGame from '../components/organisms/FeaturedGame/index';
import Reached from '../components/organisms/Reached/index';
import Story from '../components/organisms/Story/index';
import Footer from '../components/organisms/Footer/index';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
