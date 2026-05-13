import { Outlet } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ScrollToTop from '../layout/ScrollToTop';

export default function RootLayout() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background selection:bg-brand-start/30 selection:text-brand-end">
      <ScrollToTop />

      <Header />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
