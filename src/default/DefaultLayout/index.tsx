import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Outlet } from 'react-router-dom';

export function DefaultLayout() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
