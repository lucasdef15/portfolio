import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import '../styles/RootLayout.css';

export default function RootLayout() {
  const location = useLocation();

  return (
    <div className="root-layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
