import { Link } from 'react-router-dom'
import { ROUTES } from '../routes'

export default function CartPage() {
  return (
    <section className="page">
      <h1>Cart</h1>
      <p>Your bag is empty. Browse the catalog to add items.</p>
      <Link to={ROUTES.products} className="mt-2">
        Shop products
      </Link>
    </section>
  )
}
