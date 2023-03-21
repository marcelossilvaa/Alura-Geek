import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './default/DefaultLayout';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Products } from './pages/Products';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/produtos" element={<Products />} />
      </Route>
    </Routes>
  );
}
