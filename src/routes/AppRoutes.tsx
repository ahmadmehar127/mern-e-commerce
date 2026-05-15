import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import ProductsPage from '../pages/ProductsPage'
import { ROUTES } from './paths'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<HomePage />} />
      <Route path={ROUTES.products} element={<ProductsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
