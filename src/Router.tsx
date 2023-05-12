import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { ProductsHome } from './pages/ProductsHome';
import { Products } from './pages/Products';
import { DefaultLayout } from './default/DefaultLayout';
import { ProductPage } from './pages/ProductPage';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productshome" element={<ProductsHome />} />
        <Route path="/products" element={<Products />} />
      </Route>

      <Route path="*" element={<div>Página não encontrada</div>} />
    </Routes>
  );
}
