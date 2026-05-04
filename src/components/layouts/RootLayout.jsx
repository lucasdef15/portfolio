import { Outlet } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ScrollToTop from '../layout/ScrollToTop';
import '../../styles/RootLayout.css';

export default function RootLayout() {
  return (
    <div className="root-layout">
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
