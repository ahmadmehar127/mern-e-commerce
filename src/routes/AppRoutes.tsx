import { Route, Routes } from 'react-router-dom'
import CartPage from '@pages/CartPage'
import HomePage from '@pages/HomePage'
import NotFoundPage from '@pages/NotFoundPage'
import ProductsPage from '@pages/ProductsPage'
import { ROUTES } from './paths'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<HomePage />} />
      <Route path={ROUTES.products} element={<ProductsPage />} />
      <Route path={ROUTES.cart} element={<CartPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
