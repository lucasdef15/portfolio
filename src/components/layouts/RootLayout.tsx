import { Outlet } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ScrollToTop from '../layout/ScrollToTop';

export default function RootLayout() {
  return (
    <div className="mx-auto w-[80%] max-w-[1400px]">
      <ScrollToTop />
      <Header />
      <main className="min-h-[50vh] pt-[88px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
